import {
    IconButton,
    InputAdornment,
    MenuItem,
    Paper,
    TextField
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { escapeKeyListener } from 'components/common/keyboardEvents';
import { useCommonStyles } from 'components/common/styles';
import { FetchableData, FetchFn, useFetchableData } from 'components/hooks';
import { useDebouncedValue } from 'components/hooks/useDebouncedValue';
import * as React from 'react';
import reactLoadingSkeleton from 'react-loading-skeleton';

const Skeleton = reactLoadingSkeleton;

const minimumQuerySize = 3;
const searchDebounceTimeMs = 500;

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        flexGrow: 1,
        position: 'relative'
    },
    menuItem: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    placeholderResult: {
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none'
    },
    paper: {
        border: `1px solid ${theme.palette.divider}`,
        left: 0,
        marginTop: theme.spacing(0.5),
        position: 'absolute',
        right: 0,
        zIndex: theme.zIndex.tooltip
    },
    selectedItem: {
        fontWeight: 'bold'
    }
}));

export interface SearchableSelectorOption<DataType> {
    id: string;
    data: DataType;
    name: string;
    description?: string;
}

export interface SearchableSelectorProps<DataType> {
    label: string;
    options: SearchableSelectorOption<DataType>[];
    selectedItem?: SearchableSelectorOption<DataType>;
    fetchSearchResults?: FetchFn<SearchableSelectorOption<DataType>[], string>;
    onSelectionChanged(newSelection: SearchableSelectorOption<DataType>): void;
}

interface SearchableSelectorState<DataType> {
    isExpanded: boolean;
    items: SearchableSelectorOption<DataType>[];
    searchResults: FetchableData<SearchableSelectorOption<DataType>[]>;
    selectedItem?: SearchableSelectorOption<DataType>;
    showList: boolean;
    inputValue: string;
    onBlur(): void;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    onFocus(): void;
    selectItem(item: SearchableSelectorOption<DataType>): void;
    setIsExpanded(expanded: boolean): void;
}

function generateDefaultFetch<DataType>(
    options: SearchableSelectorOption<DataType>[]
): FetchFn<SearchableSelectorOption<DataType>[], string> {
    return (query: string) =>
        Promise.resolve(options.filter(option => option.name.includes(query)));
}

function useSearchableSelectorState<DataType>({
    fetchSearchResults,
    options,
    selectedItem,
    onSelectionChanged
}: SearchableSelectorProps<DataType>): SearchableSelectorState<DataType> {
    const fetchResults = fetchSearchResults || generateDefaultFetch(options);
    const [rawSearchValue, setSearchValue] = React.useState('');
    const debouncedSearchValue = useDebouncedValue(
        rawSearchValue,
        searchDebounceTimeMs
    );

    const [isExpanded, setIsExpanded] = React.useState(false);
    const [focused, setFocused] = React.useState(false);
    const minimumQueryMet = debouncedSearchValue.length > minimumQuerySize;

    const searchResults = useFetchableData<
        SearchableSelectorOption<DataType>[],
        string
    >(
        {
            defaultValue: [],
            autoFetch: minimumQueryMet,
            debugName: 'SearchableSelector Search',
            doFetch: fetchResults
        },
        debouncedSearchValue
    );
    const items = focused ? searchResults.value : options;

    let inputValue = '';
    if (focused) {
        inputValue = rawSearchValue;
    } else if (selectedItem) {
        inputValue = selectedItem.name;
    }

    const onBlur = () => {
        setFocused(false);
    };

    const onFocus = () => {
        setFocused(true);
    };

    const onChange = ({
        target: { value }
    }: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(value);
    };

    const selectItem = (item: SearchableSelectorOption<DataType>) => {
        onSelectionChanged(item);
        setSearchValue('');
        setFocused(false);
        setIsExpanded(false);
    };

    const showSearchResults =
        (searchResults.hasLoaded || searchResults.loading) &&
        focused &&
        minimumQueryMet;
    const showList = showSearchResults || isExpanded;

    return {
        inputValue,
        isExpanded,
        items,
        onBlur,
        onChange,
        onFocus,
        searchResults,
        selectItem,
        selectedItem,
        setIsExpanded,
        showList
    };
}

const preventBubble = (event: React.MouseEvent<any>) => {
    event.preventDefault();
};

const NoResultsContent: React.FC = () => (
    <MenuItem className={useStyles().placeholderResult} disabled={true}>
        No results found.
    </MenuItem>
);

const LoadingContent: React.FC = () => (
    <MenuItem className={useStyles().placeholderResult} disabled={true}>
        <div style={{ width: '100%' }}>
            <Skeleton />
        </div>
    </MenuItem>
);

const SearchableSelectorItems = <DataType extends {}>({
    items,
    selectItem,
    selectedItem,
    searchResults
}: SearchableSelectorState<DataType>) => {
    const styles = useStyles();
    const commonStyles = useCommonStyles();
    if (searchResults.loading) {
        return <LoadingContent />;
    }
    if (items.length === 0) {
        return <NoResultsContent />;
    }
    return (
        <>
            {items.map(item => {
                const onClick = () => selectItem(item);
                const selected = selectedItem && selectedItem.id === item.id;
                return (
                    <MenuItem
                        className={styles.menuItem}
                        onClick={onClick}
                        onMouseDown={preventBubble}
                        key={item.id}
                        component="div"
                    >
                        <span
                            className={
                                selected ? styles.selectedItem : undefined
                            }
                        >
                            {item.name}
                        </span>
                        <span className={commonStyles.hintText}>
                            {item.description}
                        </span>
                    </MenuItem>
                );
            })}
        </>
    );
};

/** Combines a dropdown selector of default options with a searchable text input
 * that will fetch results using a provided function.
 */
export const SearchableSelector = <DataType extends {}>(
    props: SearchableSelectorProps<DataType>
) => {
    const styles = useStyles();
    const state = useSearchableSelectorState(props);
    const {
        inputValue,
        isExpanded,
        onBlur,
        onChange,
        onFocus,
        setIsExpanded,
        showList
    } = state;
    const inputRef = React.useRef<HTMLInputElement>();

    const blurInput = () => {
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    const selectItem = (item: SearchableSelectorOption<DataType>) => {
        state.selectItem(item);
        blurInput();
    };

    const handleClickShowOptions = () => {
        blurInput();
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.container}>
            <TextField
                inputRef={inputRef}
                fullWidth={true}
                InputProps={{
                    onBlur,
                    onFocus,
                    onKeyDown: escapeKeyListener(blurInput),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                                onClick={handleClickShowOptions}
                                onMouseDown={preventBubble}
                                size="small"
                            >
                                {isExpanded ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                label={props.label}
                onChange={onChange}
                value={inputValue}
                variant="outlined"
            />
            {showList ? (
                <Paper className={styles.paper} elevation={1}>
                    <SearchableSelectorItems
                        {...state}
                        selectItem={selectItem}
                    />
                </Paper>
            ) : null}
        </div>
    );
};