import * as React from 'react';

interface SVGProps {
  className?: string;
  onClick?: () => void;
}

export const PoweredByUnionIcon = (props: SVGProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="11"
    onClick={props.onClick}
    cursor="pointer"
  >
    <path
      d="M2.8418 1.36133C3.76302 1.36133 4.43522 1.54199 4.8584 1.90332C5.28483 2.26139 5.49805 2.77572 5.49805 3.44629C5.49805 3.74902 5.44759 4.03711 5.34668 4.31055C5.24902 4.58073 5.08952 4.81999 4.86816 5.02832C4.64681 5.2334 4.35547 5.39616 3.99414 5.5166C3.63607 5.63379 3.19661 5.69238 2.67578 5.69238H1.80664V8.5H0.976562V1.36133H2.8418ZM2.76367 2.06934H1.80664V4.97949H2.58301C3.03874 4.97949 3.41797 4.93066 3.7207 4.83301C4.02669 4.73535 4.25618 4.57747 4.40918 4.35938C4.56217 4.13802 4.63867 3.84505 4.63867 3.48047C4.63867 3.00521 4.4873 2.65202 4.18457 2.4209C3.88184 2.18652 3.4082 2.06934 2.76367 2.06934ZM11.4844 5.81445C11.4844 6.25391 11.4274 6.64616 11.3135 6.99121C11.1995 7.33626 11.0352 7.6276 10.8203 7.86523C10.6055 8.10286 10.3451 8.28516 10.0391 8.41211C9.73633 8.53581 9.3929 8.59766 9.00879 8.59766C8.65072 8.59766 8.32194 8.53581 8.02246 8.41211C7.72624 8.28516 7.46908 8.10286 7.25098 7.86523C7.03613 7.6276 6.86849 7.33626 6.74805 6.99121C6.63086 6.64616 6.57227 6.25391 6.57227 5.81445C6.57227 5.22852 6.67155 4.73047 6.87012 4.32031C7.06868 3.9069 7.35189 3.59277 7.71973 3.37793C8.09082 3.15983 8.5319 3.05078 9.04297 3.05078C9.53125 3.05078 9.95768 3.15983 10.3223 3.37793C10.6901 3.59603 10.9749 3.91178 11.1768 4.3252C11.3818 4.73535 11.4844 5.23177 11.4844 5.81445ZM7.41211 5.81445C7.41211 6.24414 7.46908 6.61686 7.58301 6.93262C7.69694 7.24837 7.87272 7.49251 8.11035 7.66504C8.34798 7.83757 8.65397 7.92383 9.02832 7.92383C9.39941 7.92383 9.70378 7.83757 9.94141 7.66504C10.1823 7.49251 10.3597 7.24837 10.4736 6.93262C10.5876 6.61686 10.6445 6.24414 10.6445 5.81445C10.6445 5.38802 10.5876 5.02018 10.4736 4.71094C10.3597 4.39844 10.1839 4.15755 9.94629 3.98828C9.70866 3.81901 9.40104 3.73438 9.02344 3.73438C8.4668 3.73438 8.05827 3.91829 7.79785 4.28613C7.54069 4.65397 7.41211 5.16341 7.41211 5.81445ZM17.2412 8.49023L16.2891 5.375C16.2467 5.24154 16.2061 5.11133 16.167 4.98438C16.1312 4.85417 16.097 4.73047 16.0645 4.61328C16.0352 4.49284 16.0075 4.38216 15.9814 4.28125C15.9587 4.17708 15.9391 4.08757 15.9229 4.0127H15.8887C15.8757 4.08757 15.8577 4.17708 15.835 4.28125C15.8122 4.38216 15.7845 4.49284 15.752 4.61328C15.7227 4.73372 15.6901 4.86068 15.6543 4.99414C15.6185 5.12435 15.5778 5.25618 15.5322 5.38965L14.5361 8.49023H13.623L12.1484 3.13867H12.9883L13.7598 6.09277C13.8118 6.28809 13.8607 6.48177 13.9062 6.67383C13.9551 6.86263 13.9958 7.04167 14.0283 7.21094C14.0641 7.37695 14.0902 7.52181 14.1064 7.64551H14.1455C14.165 7.56413 14.1862 7.46647 14.209 7.35254C14.235 7.23861 14.2627 7.11816 14.292 6.99121C14.3245 6.861 14.3587 6.73242 14.3945 6.60547C14.4303 6.47526 14.4661 6.35319 14.502 6.23926L15.4883 3.13867H16.3623L17.3145 6.23438C17.3633 6.39062 17.4105 6.55339 17.4561 6.72266C17.5049 6.89193 17.5488 7.05632 17.5879 7.21582C17.627 7.37207 17.6546 7.51204 17.6709 7.63574H17.71C17.723 7.52507 17.7474 7.38835 17.7832 7.22559C17.819 7.06283 17.8597 6.88379 17.9053 6.68848C17.9541 6.49316 18.0046 6.2946 18.0566 6.09277L18.8379 3.13867H19.6631L18.1836 8.49023H17.2412ZM22.7002 3.05078C23.1559 3.05078 23.5465 3.15169 23.8721 3.35352C24.1976 3.55534 24.4466 3.83854 24.6191 4.20312C24.7917 4.56445 24.8779 4.98763 24.8779 5.47266V5.97559H21.1816C21.1914 6.60384 21.3477 7.08236 21.6504 7.41113C21.9531 7.73991 22.3796 7.9043 22.9297 7.9043C23.2682 7.9043 23.5677 7.87337 23.8281 7.81152C24.0885 7.74967 24.3587 7.65853 24.6387 7.53809V8.25098C24.3685 8.37142 24.0999 8.45931 23.833 8.51465C23.5693 8.56999 23.2568 8.59766 22.8955 8.59766C22.3812 8.59766 21.932 8.49349 21.5479 8.28516C21.167 8.07357 20.8708 7.76432 20.6592 7.35742C20.4476 6.95052 20.3418 6.45247 20.3418 5.86328C20.3418 5.28711 20.4378 4.78906 20.6299 4.36914C20.8252 3.94596 21.0986 3.62044 21.4502 3.39258C21.805 3.16471 22.2217 3.05078 22.7002 3.05078ZM22.6904 3.71484C22.2575 3.71484 21.9124 3.85645 21.6553 4.13965C21.3981 4.42285 21.2451 4.81836 21.1963 5.32617H24.0283C24.0251 5.00716 23.9746 4.72721 23.877 4.48633C23.7826 4.24219 23.6377 4.05339 23.4424 3.91992C23.2471 3.7832 22.9964 3.71484 22.6904 3.71484ZM28.6865 3.05078C28.7939 3.05078 28.9062 3.05729 29.0234 3.07031C29.1406 3.08008 29.2448 3.09473 29.3359 3.11426L29.2334 3.86621C29.1455 3.84342 29.0479 3.82552 28.9404 3.8125C28.833 3.79948 28.7321 3.79297 28.6377 3.79297C28.4229 3.79297 28.2194 3.83691 28.0273 3.9248C27.8385 4.00944 27.6725 4.13314 27.5293 4.2959C27.3861 4.4554 27.2738 4.64909 27.1924 4.87695C27.111 5.10156 27.0703 5.35221 27.0703 5.62891V8.5H26.2549V3.14844H26.9287L27.0166 4.13477H27.0508C27.1615 3.9362 27.2949 3.75553 27.4512 3.59277C27.6074 3.42676 27.7881 3.29492 27.9932 3.19727C28.2015 3.09961 28.4326 3.05078 28.6865 3.05078ZM32.4072 3.05078C32.863 3.05078 33.2536 3.15169 33.5791 3.35352C33.9046 3.55534 34.1536 3.83854 34.3262 4.20312C34.4987 4.56445 34.585 4.98763 34.585 5.47266V5.97559H30.8887C30.8984 6.60384 31.0547 7.08236 31.3574 7.41113C31.6602 7.73991 32.0866 7.9043 32.6367 7.9043C32.9753 7.9043 33.2747 7.87337 33.5352 7.81152C33.7956 7.74967 34.0658 7.65853 34.3457 7.53809V8.25098C34.0755 8.37142 33.807 8.45931 33.54 8.51465C33.2764 8.56999 32.9639 8.59766 32.6025 8.59766C32.0882 8.59766 31.639 8.49349 31.2549 8.28516C30.874 8.07357 30.5778 7.76432 30.3662 7.35742C30.1546 6.95052 30.0488 6.45247 30.0488 5.86328C30.0488 5.28711 30.1449 4.78906 30.3369 4.36914C30.5322 3.94596 30.8057 3.62044 31.1572 3.39258C31.512 3.16471 31.9287 3.05078 32.4072 3.05078ZM32.3975 3.71484C31.9645 3.71484 31.6195 3.85645 31.3623 4.13965C31.1051 4.42285 30.9521 4.81836 30.9033 5.32617H33.7354C33.7321 5.00716 33.6816 4.72721 33.584 4.48633C33.4896 4.24219 33.3447 4.05339 33.1494 3.91992C32.9541 3.7832 32.7035 3.71484 32.3975 3.71484ZM37.8662 8.59766C37.1891 8.59766 36.652 8.36654 36.2549 7.9043C35.861 7.44206 35.6641 6.75521 35.6641 5.84375C35.6641 4.92253 35.8659 4.22754 36.2695 3.75879C36.6732 3.28678 37.2103 3.05078 37.8809 3.05078C38.1641 3.05078 38.4115 3.08822 38.623 3.16309C38.8346 3.23796 39.0169 3.33887 39.1699 3.46582C39.3229 3.58952 39.4515 3.73112 39.5557 3.89062H39.6143C39.6012 3.78971 39.5882 3.65137 39.5752 3.47559C39.5622 3.2998 39.5557 3.15658 39.5557 3.0459V0.902344H40.3662V8.5H39.7119L39.5898 7.73828H39.5557C39.4548 7.89779 39.3262 8.04264 39.1699 8.17285C39.0169 8.30306 38.833 8.40723 38.6182 8.48535C38.4066 8.56022 38.1559 8.59766 37.8662 8.59766ZM37.9932 7.92383C38.5661 7.92383 38.9714 7.76107 39.209 7.43555C39.4466 7.11003 39.5654 6.62663 39.5654 5.98535V5.83887C39.5654 5.15853 39.4515 4.63607 39.2236 4.27148C38.999 3.9069 38.5889 3.72461 37.9932 3.72461C37.4951 3.72461 37.1224 3.91667 36.875 4.30078C36.6276 4.68164 36.5039 5.20247 36.5039 5.86328C36.5039 6.52083 36.626 7.02865 36.8701 7.38672C37.1175 7.74479 37.4919 7.92383 37.9932 7.92383ZM45.4932 0.902344V2.80176C45.4932 3.01986 45.4867 3.23145 45.4736 3.43652C45.4639 3.6416 45.4557 3.80111 45.4492 3.91504H45.4932C45.6396 3.67415 45.8512 3.4707 46.1279 3.30469C46.4046 3.13867 46.7578 3.05566 47.1875 3.05566C47.8581 3.05566 48.3919 3.28841 48.7891 3.75391C49.1895 4.21615 49.3896 4.90462 49.3896 5.81934C49.3896 6.42155 49.2985 6.92936 49.1162 7.34277C48.9339 7.75618 48.6768 8.06868 48.3447 8.28027C48.0127 8.49186 47.6204 8.59766 47.168 8.59766C46.7448 8.59766 46.3965 8.51953 46.123 8.36328C45.8529 8.20378 45.6445 8.01009 45.498 7.78223H45.4346L45.2686 8.5H44.6826V0.902344H45.4932ZM47.0557 3.73438C46.6683 3.73438 46.3607 3.81087 46.1328 3.96387C45.9049 4.11361 45.7406 4.34147 45.6396 4.64746C45.542 4.9502 45.4932 5.33431 45.4932 5.7998V5.84375C45.4932 6.51758 45.6055 7.03353 45.8301 7.3916C46.0547 7.74642 46.4632 7.92383 47.0557 7.92383C47.5537 7.92383 47.9264 7.74154 48.1738 7.37695C48.4245 7.01237 48.5498 6.49154 48.5498 5.81445C48.5498 5.12435 48.4261 4.60514 48.1787 4.25684C47.9346 3.90853 47.5602 3.73438 47.0557 3.73438ZM49.9609 3.14844H50.8301L52.0117 6.25391C52.0801 6.4362 52.1436 6.61198 52.2021 6.78125C52.2607 6.94727 52.3128 7.10677 52.3584 7.25977C52.404 7.41276 52.4398 7.56087 52.4658 7.7041H52.5C52.5456 7.54134 52.6107 7.32812 52.6953 7.06445C52.7799 6.79753 52.8711 6.52572 52.9688 6.24902L54.0869 3.14844H54.9609L52.6318 9.28613C52.5081 9.61491 52.3633 9.90137 52.1973 10.1455C52.0345 10.3896 51.8359 10.5768 51.6016 10.707C51.3672 10.8405 51.084 10.9072 50.752 10.9072C50.599 10.9072 50.4639 10.8975 50.3467 10.8779C50.2295 10.8617 50.1286 10.8421 50.0439 10.8193V10.1699C50.1156 10.1862 50.2018 10.2008 50.3027 10.2139C50.4069 10.2269 50.5143 10.2334 50.625 10.2334C50.8268 10.2334 51.001 10.1943 51.1475 10.1162C51.2972 10.0413 51.4258 9.93066 51.5332 9.78418C51.6406 9.6377 51.7334 9.46354 51.8115 9.26172L52.1045 8.50977L49.9609 3.14844Z"
      fill="white"
    />
    <g clipPath="url(#clip0_5989_175110)">
      <path
        d="M59.2188 5.20802V0.748535H61.5271V6.69883C61.5271 6.96401 61.6754 7.11313 61.9393 7.11313H65.284C65.5478 7.11313 65.6961 6.96401 65.6961 6.69883V0.748535H68.0205V5.20802C68.0205 7.64437 66.0427 9.5 63.6196 9.5C61.1965 9.5 59.2188 7.6435 59.2188 5.20802Z"
        fill="white"
      />
      <path
        d="M77.662 4.79197V9.03598H75.3537V3.08569C75.3537 2.82051 75.2054 2.67117 74.9414 2.67117H71.58C71.316 2.67117 71.1677 2.82051 71.1677 3.08569V9.03598H68.8594V4.79197C68.8594 2.3554 70.8374 0.5 73.2603 0.5C75.6832 0.5 77.662 2.35628 77.662 4.79197Z"
        fill="white"
      />
      <path d="M81.0583 9.03598H78.75V0.748535H81.0583V9.03598Z" fill="white" />
      <path
        d="M90.9426 4.97504C90.9426 7.51102 88.9975 9.5 86.5252 9.5C84.0529 9.5 82.1406 7.51102 82.1406 4.97504C82.1406 2.45679 84.0526 0.5 86.5252 0.5C88.9977 0.5 90.9426 2.45591 90.9426 4.97504ZM84.4152 6.71547C84.4147 6.77005 84.425 6.82418 84.4455 6.87469C84.4661 6.92521 84.4964 6.97111 84.5348 7.00969C84.5732 7.04827 84.6188 7.07876 84.6691 7.09938C84.7193 7.12 84.7732 7.13034 84.8275 7.12978H88.2229C88.2772 7.13034 88.331 7.12 88.3812 7.09938C88.4315 7.07875 88.4771 7.04826 88.5155 7.00967C88.5538 6.97109 88.5842 6.9252 88.6047 6.87468C88.6252 6.82416 88.6355 6.77004 88.6349 6.71547V3.28453C88.6355 3.22996 88.6252 3.17584 88.6047 3.12532C88.5842 3.0748 88.5538 3.02891 88.5155 2.99033C88.4771 2.95174 88.4315 2.92125 88.3812 2.90062C88.331 2.88 88.2772 2.86966 88.2229 2.87022H84.8275C84.7732 2.86966 84.7193 2.88 84.6691 2.90062C84.6188 2.92124 84.5732 2.95173 84.5348 2.99031C84.4964 3.02889 84.4661 3.07479 84.4455 3.1253C84.425 3.17582 84.4147 3.22995 84.4152 3.28453V6.71547Z"
        fill="white"
      />
      <path
        d="M100.554 4.79197V9.03598H98.2452V3.08569C98.2452 2.82051 98.0969 2.67117 97.8329 2.67117H94.4706C94.2066 2.67117 94.0583 2.82051 94.0583 3.08569V9.03598H91.75V4.79197C91.75 2.3554 93.728 0.5 96.1509 0.5C98.5738 0.5 100.554 2.35628 100.554 4.79197Z"
        fill="white"
      />
    </g>
  </svg>
);
