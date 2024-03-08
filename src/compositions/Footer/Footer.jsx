import React from 'react';
import Image from 'next/image';
import Container from '../../componets/Container';
import css from './Footer.module.css';

import { constans } from '@/constants/const.header';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.wrapper}>
          <p className={css.tel}>{constans.numberTel}</p>
          <p className={css.address}>{constans.location}</p>

          <div className={css.thumb}>
            {/* <Image src={'/logo_f.svg'} alt={'logo'} /> */}
            <svg
              width=""
              height="176"
              viewBox="0 0 229 176"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_520_81324)">
                <path
                  d="M140.892 80.1688C105.453 64.3746 70.6943 68.6746 57.7449 72.7988C92.8479 47.8198 125.09 56.4603 157.521 70.9136C191.831 86.2046 213.774 84.8734 222.892 80.7777C193.637 103.155 185.191 99.9116 140.892 80.1688Z"
                  fill="#BBE2F8"
                />
                <path
                  d="M140.45 63.6677C102.562 55.2818 69.3601 66.4449 57.4953 73.0747C86.8981 41.5846 120.222 43.6017 154.893 51.2757C191.574 59.3944 212.811 53.7023 220.927 47.8666C196.734 75.6384 187.809 74.1501 140.45 63.6677Z"
                  fill="#F8F387"
                />
                <path
                  d="M137.32 47.0513C98.5156 46.37 68.1934 63.9121 57.8829 72.7683C80.4375 36.0641 113.502 31.4126 149.012 32.036C186.58 32.6956 206.264 22.8942 213.058 15.5617C194.87 47.5861 185.826 47.903 137.32 47.0513Z"
                  fill="#1386C7"
                />
              </g>
              <path
                d="M10.3586 127.997C9.38528 127.997 8.53063 127.785 7.79469 127.359C7.08248 126.934 6.52458 126.319 6.121 125.516C5.71742 124.712 5.51562 123.755 5.51562 122.644V95.5236C5.51562 94.3892 5.71742 93.432 6.121 92.6521C6.52458 91.8485 7.08248 91.234 7.79469 90.8086C8.53063 90.3832 9.37341 90.1704 10.323 90.1704C11.2964 90.1704 12.1391 90.395 12.8514 90.844C13.5873 91.2694 14.1452 91.8721 14.525 92.6521C14.9286 93.432 15.1304 94.3892 15.1304 95.5236V110.165H6.83321V107.932H13.7772L12.5309 109.811V95.3109C12.5309 94.7201 12.4359 94.2237 12.246 93.822C12.0561 93.4202 11.7949 93.1129 11.4625 92.9002C11.1539 92.6875 10.7741 92.5812 10.323 92.5812C9.91944 92.5812 9.53959 92.6875 9.18349 92.9002C8.85113 93.1129 8.58998 93.4202 8.40006 93.822C8.23388 94.2237 8.15079 94.7201 8.15079 95.3109V122.892C8.15079 123.483 8.23388 123.979 8.40006 124.381C8.58998 124.783 8.85113 125.09 9.18349 125.303C9.53959 125.516 9.9313 125.622 10.3586 125.622C10.786 125.622 11.1658 125.528 11.4982 125.338C11.8305 125.126 12.0917 124.818 12.2816 124.417C12.4715 123.991 12.5665 123.483 12.5665 122.892V114.809H15.1304V122.644C15.1304 123.471 15.0117 124.216 14.7743 124.878C14.5606 125.539 14.2402 126.107 13.8128 126.579C13.3855 127.052 12.8751 127.406 12.2816 127.643C11.7118 127.879 11.0708 127.997 10.3586 127.997Z"
                fill="#1386C7"
              />
              <path d="M20.6472 127.785V75.9898H23.2467V127.785H20.6472Z" fill="#1386C7" />
              <path
                d="M29.084 127.785V90.4186H31.6835V127.785H29.084ZM30.4015 86.6607C29.8318 86.6607 29.3451 86.4835 28.9415 86.129C28.5617 85.7508 28.3718 85.2899 28.3718 84.7463C28.3718 84.2028 28.5617 83.7537 28.9415 83.3992C29.3451 83.021 29.8318 82.832 30.4015 82.832C30.9476 82.832 31.4105 83.021 31.7903 83.3992C32.1939 83.7537 32.3957 84.2028 32.3957 84.7463C32.3957 85.2899 32.1939 85.7508 31.7903 86.129C31.4105 86.4835 30.9476 86.6607 30.4015 86.6607Z"
                fill="#1386C7"
              />
              <path
                d="M41.1174 127.997C40.334 127.997 39.6455 127.808 39.052 127.43C38.4585 127.028 37.9956 126.461 37.6632 125.728C37.3308 124.996 37.1647 124.098 37.1647 123.034V95.1691C37.1647 94.1056 37.3308 93.2075 37.6632 92.4748C37.9956 91.7421 38.4585 91.1749 39.052 90.7731C39.6455 90.3713 40.334 90.1704 41.1174 90.1704C41.6872 90.1704 42.1738 90.2768 42.5774 90.4895C43.0047 90.6786 43.3609 90.9386 43.6457 91.2694C43.9306 91.6003 44.168 91.9548 44.3579 92.333H44.4292V75.9898H47.0643V127.785H44.4292V125.87H44.3579C44.1918 126.272 43.9662 126.638 43.6813 126.969C43.3965 127.276 43.0404 127.525 42.613 127.714C42.1857 127.903 41.6872 127.997 41.1174 127.997ZM42.1145 125.587C42.5656 125.587 42.9691 125.48 43.3252 125.268C43.6813 125.055 43.9544 124.748 44.1443 124.346C44.3342 123.92 44.4292 123.4 44.4292 122.786V95.4173C44.4292 94.8028 44.3342 94.2946 44.1443 93.8929C43.9544 93.4674 43.6813 93.1484 43.3252 92.9357C42.9691 92.723 42.5656 92.6166 42.1145 92.6166C41.6634 92.6166 41.2598 92.723 40.9037 92.9357C40.5714 93.1484 40.2984 93.4674 40.0847 93.8929C39.8948 94.2946 39.7998 94.8028 39.7998 95.4173V122.786C39.7998 123.4 39.8948 123.92 40.0847 124.346C40.2984 124.748 40.5714 125.055 40.9037 125.268C41.2598 125.48 41.6634 125.587 42.1145 125.587Z"
                fill="#1386C7"
              />
              <path
                d="M55.9997 127.997C55.24 127.997 54.5634 127.832 53.9699 127.501C53.4001 127.146 52.949 126.638 52.6167 125.977C52.3081 125.291 52.1538 124.452 52.1538 123.46V111.619C52.1538 110.579 52.3555 109.704 52.7591 108.995C53.1865 108.263 53.8037 107.695 54.6109 107.294C55.4418 106.868 56.4745 106.596 57.709 106.478L60.5578 106.195V108.428L57.9939 108.712C56.9018 108.806 56.0946 109.09 55.5723 109.562C55.0738 110.035 54.8245 110.697 54.8245 111.548V123.211C54.8245 124.015 55.0145 124.618 55.3943 125.019C55.7741 125.421 56.3083 125.622 56.9968 125.622C57.4478 125.622 57.8395 125.528 58.1719 125.338C58.528 125.126 58.7891 124.818 58.9553 124.417C59.1452 124.015 59.2402 123.542 59.2402 122.999V95.1337C59.2402 94.3301 59.0503 93.7038 58.6704 93.2547C58.2906 92.8057 57.7683 92.5812 57.1036 92.5812C56.4389 92.5812 55.9166 92.8057 55.5367 93.2547C55.1806 93.7038 55.0026 94.3301 55.0026 95.1337V103.784H52.403V95.3109C52.403 94.271 52.5929 93.3729 52.9728 92.6166C53.3764 91.8367 53.9343 91.234 54.6465 90.8086C55.3587 90.3832 56.1896 90.1704 57.1392 90.1704C58.1125 90.1704 58.9435 90.3832 59.6319 90.8086C60.3441 91.234 60.8902 91.8367 61.27 92.6166C61.6498 93.3729 61.8398 94.2828 61.8398 95.3464V127.785H59.2402V125.906H59.1334C58.9435 126.355 58.6942 126.745 58.3856 127.076C58.1007 127.383 57.7446 127.619 57.3173 127.785C56.9137 127.926 56.4745 127.997 55.9997 127.997Z"
                fill="#1386C7"
              />
              <path
                d="M78.8558 127.997C78.0724 127.997 77.3839 127.808 76.7904 127.43C76.1969 127.028 75.734 126.461 75.4016 125.728C75.0692 124.996 74.9031 124.098 74.9031 123.034V95.1691C74.9031 94.1056 75.0692 93.2075 75.4016 92.4748C75.734 91.7421 76.1969 91.1749 76.7904 90.7731C77.3839 90.3713 78.0724 90.1704 78.8558 90.1704C79.4256 90.1704 79.9122 90.2768 80.3158 90.4895C80.7431 90.6786 81.0993 90.9386 81.3841 91.2694C81.669 91.6003 81.9064 91.9548 82.0963 92.333H82.1676V75.9898H84.8027V127.785H82.1676V125.87H82.0963C81.9302 126.272 81.7046 126.638 81.4197 126.969C81.1349 127.276 80.7788 127.525 80.3514 127.714C79.9241 127.903 79.4256 127.997 78.8558 127.997ZM79.8529 125.587C80.3039 125.587 80.7075 125.48 81.0636 125.268C81.4197 125.055 81.6928 124.748 81.8827 124.346C82.0726 123.92 82.1676 123.4 82.1676 122.786V95.4173C82.1676 94.8028 82.0726 94.2946 81.8827 93.8929C81.6928 93.4674 81.4197 93.1484 81.0636 92.9357C80.7075 92.723 80.3039 92.6166 79.8529 92.6166C79.4018 92.6166 78.9982 92.723 78.6421 92.9357C78.3098 93.1484 78.0368 93.4674 77.8231 93.8929C77.6332 94.2946 77.5382 94.8028 77.5382 95.4173V122.786C77.5382 123.4 77.6332 123.92 77.8231 124.346C78.0368 124.748 78.3098 125.055 78.6421 125.268C78.9982 125.48 79.4018 125.587 79.8529 125.587Z"
                fill="#1386C7"
              />
              <path
                d="M95.0913 127.997C94.1179 127.997 93.2633 127.785 92.5273 127.359C91.8151 126.934 91.2572 126.319 90.8536 125.516C90.45 124.712 90.2483 123.755 90.2483 122.644V95.5236C90.2483 94.3892 90.45 93.432 90.8536 92.6521C91.2572 91.8485 91.8151 91.234 92.5273 90.8086C93.2633 90.3832 94.106 90.1704 95.0556 90.1704C96.029 90.1704 96.8718 90.395 97.584 90.844C98.3199 91.2694 98.8778 91.8721 99.2577 92.6521C99.6613 93.432 99.863 94.3892 99.863 95.5236V110.165H91.5658V107.932H98.5099L97.2635 109.811V95.3109C97.2635 94.7201 97.1685 94.2237 96.9786 93.822C96.7887 93.4202 96.5275 93.1129 96.1952 92.9002C95.8866 92.6875 95.5067 92.5812 95.0556 92.5812C94.6521 92.5812 94.2722 92.6875 93.9161 92.9002C93.5838 93.1129 93.3226 93.4202 93.1327 93.822C92.9665 94.2237 92.8834 94.7201 92.8834 95.3109V122.892C92.8834 123.483 92.9665 123.979 93.1327 124.381C93.3226 124.783 93.5838 125.09 93.9161 125.303C94.2722 125.516 94.6639 125.622 95.0913 125.622C95.5186 125.622 95.8984 125.528 96.2308 125.338C96.5632 125.126 96.8243 124.818 97.0142 124.417C97.2041 123.991 97.2991 123.483 97.2991 122.892V114.809H99.863V122.644C99.863 123.471 99.7443 124.216 99.5069 124.878C99.2933 125.539 98.9728 126.107 98.5455 126.579C98.1181 127.052 97.6077 127.406 97.0142 127.643C96.4445 127.879 95.8035 127.997 95.0913 127.997Z"
                fill="#1386C7"
              />
              <path
                d="M105.166 127.785V90.4186H107.766V92.4393H107.873C108.134 91.8012 108.549 91.2694 109.119 90.844C109.689 90.395 110.377 90.1704 111.184 90.1704C112.395 90.1704 113.333 90.5959 113.997 91.4467C114.662 92.2739 114.995 93.4674 114.995 95.0273V127.785H112.395V95.3109C112.395 94.4128 112.205 93.7392 111.825 93.2902C111.445 92.8411 110.899 92.6166 110.187 92.6166C109.665 92.6166 109.226 92.7466 108.87 93.0066C108.513 93.2665 108.24 93.6211 108.051 94.0701C107.861 94.4955 107.766 95.0037 107.766 95.5945V127.785H105.166Z"
                fill="#1386C7"
              />
              <path
                d="M125.354 127.891C123.93 127.891 122.862 127.536 122.149 126.827C121.461 126.095 121.117 125.019 121.117 123.601V92.7584H119.479V90.4186H121.117V80.3503H123.752V90.4186H126.173V92.7584H123.752V123.46C123.752 124.169 123.906 124.7 124.215 125.055C124.523 125.386 125.01 125.551 125.675 125.551C125.77 125.551 125.853 125.551 125.924 125.551C126.019 125.551 126.102 125.539 126.173 125.516V127.82C126.055 127.82 125.924 127.832 125.782 127.856C125.663 127.879 125.521 127.891 125.354 127.891Z"
                fill="#1386C7"
              />
              <path
                d="M133.827 127.997C133.067 127.997 132.39 127.832 131.797 127.501C131.227 127.146 130.776 126.638 130.444 125.977C130.135 125.291 129.981 124.452 129.981 123.46V111.619C129.981 110.579 130.183 109.704 130.586 108.995C131.014 108.263 131.631 107.695 132.438 107.294C133.269 106.868 134.302 106.596 135.536 106.478L138.385 106.195V108.428L135.821 108.712C134.729 108.806 133.922 109.09 133.399 109.562C132.901 110.035 132.652 110.697 132.652 111.548V123.211C132.652 124.015 132.842 124.618 133.221 125.019C133.601 125.421 134.135 125.622 134.824 125.622C135.275 125.622 135.667 125.528 135.999 125.338C136.355 125.126 136.616 124.818 136.782 124.417C136.972 124.015 137.067 123.542 137.067 122.999V95.1337C137.067 94.3301 136.877 93.7038 136.498 93.2547C136.118 92.8057 135.595 92.5812 134.931 92.5812C134.266 92.5812 133.744 92.8057 133.364 93.2547C133.008 93.7038 132.83 94.3301 132.83 95.1337V103.784H130.23V95.3109C130.23 94.271 130.42 93.3729 130.8 92.6166C131.203 91.8367 131.761 91.234 132.474 90.8086C133.186 90.3832 134.017 90.1704 134.966 90.1704C135.94 90.1704 136.771 90.3832 137.459 90.8086C138.171 91.234 138.717 91.8367 139.097 92.6166C139.477 93.3729 139.667 94.2828 139.667 95.3464V127.785H137.067V125.906H136.96C136.771 126.355 136.521 126.745 136.213 127.076C135.928 127.383 135.572 127.619 135.144 127.785C134.741 127.926 134.302 127.997 133.827 127.997Z"
                fill="#1386C7"
              />
              <path d="M145.326 127.785V75.9898H147.926V127.785H145.326Z" fill="#1386C7" />
              <path
                d="M166.295 140.618C165.321 140.618 164.467 140.417 163.731 140.015C163.019 139.614 162.461 139.046 162.057 138.314C161.677 137.581 161.487 136.707 161.487 135.69V130.479H164.051V135.868C164.051 136.6 164.253 137.179 164.657 137.605C165.06 138.03 165.606 138.243 166.295 138.243C166.983 138.243 167.517 138.018 167.897 137.569C168.301 137.12 168.503 136.482 168.503 135.655V125.799H168.396C168.23 126.201 167.992 126.567 167.684 126.898C167.399 127.206 167.043 127.454 166.615 127.643C166.212 127.832 165.725 127.926 165.155 127.926C164.372 127.926 163.683 127.737 163.09 127.359C162.496 126.957 162.033 126.39 161.701 125.658C161.369 124.901 161.203 123.991 161.203 122.928V95.1691C161.203 94.1056 161.369 93.2075 161.701 92.4748C162.033 91.7421 162.496 91.1749 163.09 90.7731C163.683 90.3713 164.372 90.1704 165.155 90.1704C165.725 90.1704 166.224 90.2768 166.651 90.4895C167.078 90.6786 167.422 90.9386 167.684 91.2694C167.968 91.5767 168.206 91.943 168.396 92.3684H168.503V90.4186H171.102V135.442C171.102 136.506 170.9 137.427 170.497 138.207C170.117 138.987 169.559 139.578 168.823 139.98C168.111 140.405 167.268 140.618 166.295 140.618ZM166.152 125.551C166.603 125.551 167.007 125.445 167.363 125.232C167.719 125.019 167.992 124.712 168.182 124.31C168.372 123.885 168.467 123.365 168.467 122.75V95.4173C168.467 94.8028 168.372 94.2946 168.182 93.8929C167.992 93.4674 167.719 93.1484 167.363 92.9357C167.007 92.723 166.603 92.6166 166.152 92.6166C165.701 92.6166 165.298 92.723 164.942 92.9357C164.609 93.1484 164.336 93.4674 164.123 93.8929C163.933 94.2946 163.838 94.8028 163.838 95.4173V122.75C163.838 123.365 163.933 123.885 164.123 124.31C164.336 124.712 164.609 125.019 164.942 125.232C165.298 125.445 165.701 125.551 166.152 125.551Z"
                fill="#1386C7"
              />
              <path
                d="M176.726 127.785V90.4186H179.361V92.8648H179.468C179.705 91.9903 180.085 91.3522 180.607 90.9504C181.153 90.525 181.818 90.3122 182.602 90.3122C182.791 90.3122 182.946 90.3359 183.064 90.3832C183.207 90.4068 183.314 90.4304 183.385 90.4541V93.1484C183.266 93.1011 183.136 93.0657 182.993 93.042C182.851 93.0184 182.696 93.0066 182.53 93.0066C181.818 93.0066 181.225 93.172 180.75 93.5029C180.299 93.8338 179.954 94.3183 179.717 94.9564C179.48 95.5945 179.361 96.3745 179.361 97.2962V127.785H176.726Z"
                fill="#1386C7"
              />
              <path
                d="M191.679 127.997C190.73 127.997 189.875 127.796 189.115 127.395C188.379 126.969 187.786 126.355 187.335 125.551C186.907 124.748 186.694 123.767 186.694 122.609V95.5945C186.694 94.4365 186.907 93.4556 187.335 92.6521C187.786 91.8485 188.379 91.234 189.115 90.8086C189.875 90.3832 190.73 90.1704 191.679 90.1704C192.653 90.1704 193.507 90.3832 194.243 90.8086C195.003 91.234 195.596 91.8485 196.024 92.6521C196.475 93.4556 196.7 94.4365 196.7 95.5945V122.609C196.7 123.767 196.475 124.748 196.024 125.551C195.596 126.355 195.003 126.969 194.243 127.395C193.507 127.796 192.653 127.997 191.679 127.997ZM191.679 125.587C192.178 125.587 192.593 125.48 192.926 125.268C193.282 125.031 193.555 124.712 193.745 124.31C193.958 123.885 194.065 123.389 194.065 122.821V95.3818C194.065 94.791 193.958 94.2946 193.745 93.8929C193.555 93.4674 193.282 93.1484 192.926 92.9357C192.593 92.723 192.178 92.6166 191.679 92.6166C191.204 92.6166 190.789 92.723 190.433 92.9357C190.101 93.1484 189.839 93.4674 189.649 93.8929C189.46 94.2946 189.365 94.791 189.365 95.3818V122.821C189.365 123.389 189.46 123.885 189.649 124.31C189.839 124.712 190.101 125.031 190.433 125.268C190.789 125.48 191.204 125.587 191.679 125.587Z"
                fill="#1386C7"
              />
              <path
                d="M205.778 128.033C204.923 128.033 204.211 127.856 203.641 127.501C203.072 127.123 202.644 126.579 202.36 125.87C202.075 125.161 201.932 124.31 201.932 123.318V90.4186H204.567V123.07C204.567 123.897 204.745 124.535 205.102 124.984C205.481 125.409 206.039 125.622 206.775 125.622C207.179 125.622 207.523 125.563 207.808 125.445C208.093 125.303 208.342 125.102 208.556 124.842C208.769 124.582 208.924 124.275 209.019 123.92C209.114 123.566 209.161 123.176 209.161 122.75V90.4186H211.796V127.785H209.161V125.87H209.09C208.9 126.296 208.651 126.674 208.342 127.005C208.033 127.336 207.654 127.596 207.203 127.785C206.775 127.95 206.3 128.033 205.778 128.033Z"
                fill="#1386C7"
              />
              <path
                d="M217.349 140.37V90.4186H219.984V92.3684H220.055C220.245 91.943 220.47 91.5767 220.732 91.2694C221.016 90.9386 221.373 90.6786 221.8 90.4895C222.227 90.2768 222.714 90.1704 223.26 90.1704C224.091 90.1704 224.791 90.3713 225.361 90.7731C225.954 91.1749 226.417 91.7421 226.75 92.4748C227.082 93.2075 227.248 94.1056 227.248 95.1691V123.034C227.248 124.098 227.082 124.996 226.75 125.728C226.417 126.461 225.954 127.028 225.361 127.43C224.791 127.808 224.091 127.997 223.26 127.997C222.714 127.997 222.227 127.903 221.8 127.714C221.396 127.525 221.052 127.276 220.767 126.969C220.482 126.638 220.245 126.272 220.055 125.87H219.984V140.37H217.349ZM222.263 125.587C222.738 125.587 223.141 125.48 223.474 125.268C223.83 125.055 224.103 124.748 224.293 124.346C224.506 123.92 224.613 123.4 224.613 122.786V95.4173C224.613 94.8028 224.506 94.2946 224.293 93.8929C224.103 93.4674 223.83 93.1484 223.474 92.9357C223.141 92.723 222.738 92.6166 222.263 92.6166C221.836 92.6166 221.444 92.723 221.088 92.9357C220.732 93.1484 220.459 93.4674 220.269 93.8929C220.079 94.2946 219.984 94.8028 219.984 95.4173V122.786C219.984 123.4 220.079 123.92 220.269 124.346C220.459 124.748 220.732 125.055 221.088 125.268C221.444 125.48 221.836 125.587 222.263 125.587Z"
                fill="#1386C7"
              />
              <line y1="147.385" x2="229" y2="147.385" stroke="#BBE2F8" stroke-width="1.4586" />
              <path
                d="M205.925 172.547C205.925 173.093 205.843 173.581 205.68 174.011C205.516 174.429 205.289 174.789 204.997 175.091C204.717 175.381 204.384 175.602 203.999 175.753C203.614 175.916 203.206 175.997 202.774 175.997C202.144 175.997 201.561 175.864 201.024 175.596C200.499 175.329 200.073 174.975 199.746 174.533L200.499 173.68C200.767 174.063 201.106 174.359 201.514 174.568C201.922 174.777 202.337 174.882 202.757 174.882C203.317 174.882 203.783 174.684 204.157 174.289C204.542 173.894 204.735 173.331 204.735 172.599C204.735 172.251 204.676 171.943 204.559 171.676C204.443 171.408 204.285 171.17 204.087 170.961C203.889 170.752 203.661 170.566 203.404 170.404C203.159 170.241 202.897 170.09 202.617 169.951C202.278 169.788 201.957 169.608 201.654 169.41C201.351 169.201 201.082 168.963 200.849 168.696C200.627 168.429 200.446 168.115 200.306 167.755C200.166 167.383 200.096 166.953 200.096 166.466C200.096 165.896 200.184 165.403 200.359 164.984C200.534 164.555 200.767 164.2 201.059 163.921C201.362 163.631 201.701 163.416 202.074 163.277C202.447 163.137 202.838 163.068 203.247 163.068C203.807 163.068 204.309 163.166 204.752 163.364C205.207 163.55 205.586 163.846 205.89 164.253L205.137 165.106C204.904 164.769 204.629 164.531 204.314 164.392C203.999 164.241 203.655 164.165 203.282 164.165C203.037 164.165 202.792 164.212 202.547 164.305C202.313 164.386 202.103 164.52 201.916 164.706C201.73 164.891 201.578 165.13 201.461 165.42C201.345 165.71 201.286 166.053 201.286 166.448C201.286 166.797 201.339 167.099 201.444 167.354C201.549 167.61 201.689 167.836 201.864 168.034C202.051 168.231 202.261 168.406 202.494 168.557C202.739 168.708 202.99 168.847 203.247 168.975C203.573 169.137 203.894 169.323 204.209 169.532C204.536 169.741 204.828 169.985 205.085 170.264C205.341 170.543 205.545 170.868 205.697 171.24C205.849 171.612 205.925 172.047 205.925 172.547Z"
                fill="#1386C7"
              />
              <path
                d="M198.24 169.55C198.24 170.561 198.135 171.449 197.925 172.216C197.715 172.983 197.411 173.628 197.015 174.15C196.618 174.661 196.139 175.051 195.579 175.318C195.031 175.573 194.418 175.701 193.742 175.701H191.081V163.364H193.759C194.436 163.364 195.048 163.498 195.597 163.765C196.157 164.021 196.63 164.41 197.015 164.932C197.411 165.455 197.715 166.106 197.925 166.884C198.135 167.651 198.24 168.539 198.24 169.55ZM197.032 169.55C197.032 168.679 196.945 167.924 196.77 167.285C196.606 166.634 196.373 166.1 196.069 165.682C195.778 165.264 195.428 164.95 195.019 164.741C194.623 164.532 194.191 164.427 193.724 164.427H192.289V174.638H193.724C194.191 174.638 194.623 174.534 195.019 174.325C195.428 174.116 195.778 173.802 196.069 173.384C196.373 172.965 196.606 172.437 196.77 171.798C196.945 171.159 197.032 170.41 197.032 169.55Z"
                fill="#1386C7"
              />
              <path
                d="M183.766 175.701V163.364H188.754V164.445H184.956V168.783H188.509V169.811H184.956V174.603H188.929V175.701H183.766Z"
                fill="#1386C7"
              />
              <path
                d="M176.45 175.701V163.364H181.439V164.445H177.64V168.783H181.194V169.811H177.64V174.603H181.614V175.701H176.45Z"
                fill="#1386C7"
              />
              <path
                d="M172.152 175.701L167.829 165.438H167.776V175.701H166.639V163.364H168.161L172.45 173.628H172.502V163.364H173.622V175.701H172.152Z"
                fill="#1386C7"
              />
              <path
                d="M157.579 175.701V163.364H158.804V174.569H162.34V175.701H157.579Z"
                fill="#1386C7"
              />
              <path
                d="M154.764 175.701L154.011 172.617H150.195L149.408 175.701H148.165L151.316 163.364H152.978L156.041 175.701H154.764ZM152.156 164.462H152.086L150.37 171.641H153.836L152.156 164.462Z"
                fill="#1386C7"
              />
              <path
                d="M145.955 164.41V175.701H144.748V164.41H142.367V163.364H148.353V164.41H145.955Z"
                fill="#1386C7"
              />
              <path
                d="M139.487 175.701L135.164 165.438H135.111V175.701H133.974V163.364H135.496L139.785 173.628H139.837V163.364H140.957V175.701H139.487Z"
                fill="#1386C7"
              />
              <path
                d="M126.658 175.701V163.364H131.647V164.445H127.848V168.783H131.402V169.811H127.848V174.603H131.822V175.701H126.658Z"
                fill="#1386C7"
              />
              <path
                d="M124.347 169.55C124.347 170.561 124.242 171.449 124.032 172.216C123.822 172.983 123.519 173.628 123.122 174.15C122.725 174.661 122.247 175.051 121.687 175.318C121.138 175.573 120.526 175.701 119.849 175.701H117.188V163.364H119.866C120.543 163.364 121.156 163.498 121.704 163.765C122.264 164.021 122.737 164.41 123.122 164.932C123.519 165.455 123.822 166.106 124.032 166.884C124.242 167.651 124.347 168.539 124.347 169.55ZM123.14 169.55C123.14 168.679 123.052 167.924 122.877 167.285C122.714 166.634 122.48 166.1 122.177 165.682C121.885 165.264 121.535 164.95 121.127 164.741C120.73 164.532 120.298 164.427 119.831 164.427H118.396V174.638H119.831C120.298 174.638 120.73 174.534 121.127 174.325C121.535 174.116 121.885 173.802 122.177 173.384C122.48 172.965 122.714 172.437 122.877 171.798C123.052 171.159 123.14 170.41 123.14 169.55Z"
                fill="#1386C7"
              />
              <path
                d="M110.675 175.701L108.434 169.986H106.842V175.701H105.634V163.364H108.609C109.018 163.364 109.409 163.422 109.782 163.538C110.167 163.643 110.506 163.823 110.797 164.079C111.101 164.334 111.34 164.671 111.515 165.089C111.702 165.507 111.795 166.019 111.795 166.623C111.795 167.145 111.725 167.598 111.585 167.982C111.457 168.354 111.281 168.667 111.06 168.923C110.85 169.178 110.611 169.376 110.342 169.515C110.085 169.655 109.829 169.742 109.572 169.777L111.987 175.701H110.675ZM110.605 166.675C110.605 166.234 110.541 165.868 110.412 165.577C110.295 165.275 110.132 165.037 109.922 164.863C109.724 164.688 109.49 164.567 109.222 164.497C108.965 164.427 108.697 164.392 108.417 164.392H106.842V169.027H108.469C109.134 169.027 109.654 168.824 110.027 168.417C110.412 167.999 110.605 167.418 110.605 166.675Z"
                fill="#1386C7"
              />
              <path
                d="M102.941 171.38C102.941 172.019 102.877 172.623 102.749 173.192C102.632 173.75 102.434 174.237 102.154 174.656C101.885 175.074 101.524 175.405 101.069 175.649C100.613 175.881 100.053 175.997 99.3883 175.997C98.7231 175.997 98.163 175.881 97.708 175.649C97.2645 175.405 96.9028 175.074 96.6228 174.656C96.3544 174.237 96.1618 173.75 96.0451 173.192C95.9285 172.623 95.8701 172.019 95.8701 171.38V163.364H97.0953V171.223C97.0953 171.676 97.1245 172.123 97.1829 172.565C97.2529 173.006 97.3696 173.401 97.5329 173.75C97.708 174.086 97.9413 174.359 98.233 174.569C98.5364 174.778 98.9273 174.882 99.4058 174.882C99.8725 174.882 100.258 174.778 100.561 174.569C100.864 174.359 101.098 174.086 101.261 173.75C101.436 173.401 101.553 173.012 101.611 172.582C101.681 172.141 101.716 171.688 101.716 171.223V163.364H102.941V171.38Z"
                fill="#1386C7"
              />
              <path
                d="M93.6944 169.515C93.6944 170.479 93.6011 171.362 93.4144 172.164C93.2277 172.954 92.9593 173.633 92.6092 174.202C92.2592 174.772 91.8333 175.213 91.3315 175.527C90.8297 175.84 90.258 175.997 89.6162 175.997C88.9744 175.997 88.3968 175.84 87.8834 175.527C87.3816 175.213 86.9499 174.772 86.5881 174.202C86.2381 173.633 85.9697 172.954 85.783 172.164C85.5963 171.362 85.5029 170.479 85.5029 169.515C85.5029 168.562 85.5904 167.691 85.7655 166.901C85.9522 166.1 86.2206 165.42 86.5706 164.862C86.9207 164.293 87.3466 163.852 87.8484 163.538C88.3618 163.224 88.9511 163.068 89.6162 163.068C90.258 163.068 90.8297 163.224 91.3315 163.538C91.8333 163.852 92.2592 164.293 92.6092 164.862C92.9593 165.42 93.2277 166.1 93.4144 166.901C93.6011 167.691 93.6944 168.562 93.6944 169.515ZM92.4167 169.515C92.4167 168.771 92.3583 168.074 92.2417 167.424C92.125 166.773 91.9441 166.21 91.6991 165.734C91.4657 165.257 91.174 164.88 90.8239 164.601C90.4738 164.322 90.0713 164.183 89.6162 164.183C89.1378 164.183 88.7177 164.322 88.356 164.601C88.0059 164.88 87.7142 165.257 87.4808 165.734C87.2474 166.21 87.0724 166.773 86.9557 167.424C86.839 168.074 86.7807 168.771 86.7807 169.515C86.7807 170.258 86.839 170.955 86.9557 171.606C87.0724 172.257 87.2474 172.826 87.4808 173.314C87.7142 173.802 88.0059 174.185 88.356 174.464C88.7177 174.742 89.1378 174.882 89.6162 174.882C90.0829 174.882 90.4913 174.742 90.8414 174.464C91.1915 174.185 91.4832 173.802 91.7166 173.314C91.9499 172.826 92.125 172.257 92.2417 171.606C92.3583 170.955 92.4167 170.258 92.4167 169.515Z"
                fill="#1386C7"
              />
              <path
                d="M81.7024 170.63V175.701H80.5122V170.63L77.4316 163.364H78.7619L81.1073 169.376L83.5052 163.364H84.818L81.7024 170.63Z"
                fill="#1386C7"
              />
              <path
                d="M70.2168 175.701V163.364H71.442V174.569H74.9777V175.701H70.2168Z"
                fill="#1386C7"
              />
              <path
                d="M63.9609 175.701V163.364H65.1862V174.569H68.7218V175.701H63.9609Z"
                fill="#1386C7"
              />
              <path
                d="M61.1456 175.701L60.3929 172.617H56.5772L55.7896 175.701H54.5469L57.6974 163.364H59.3603L62.4233 175.701H61.1456ZM58.5376 164.462H58.4676L56.7523 171.641H60.2179L58.5376 164.462Z"
                fill="#1386C7"
              />
              <path
                d="M49.6356 175.701L47.3952 169.986H45.8024V175.701H44.5947V163.364H47.5703C47.9787 163.364 48.3696 163.422 48.743 163.538C49.1281 163.643 49.4664 163.823 49.7582 164.079C50.0616 164.334 50.3008 164.671 50.4758 165.089C50.6625 165.507 50.7558 166.019 50.7558 166.623C50.7558 167.145 50.6858 167.598 50.5458 167.982C50.4175 168.354 50.2424 168.667 50.0207 168.923C49.8107 169.178 49.5715 169.376 49.3031 169.515C49.0464 169.655 48.7897 169.742 48.5329 169.777L50.9484 175.701H49.6356ZM49.5656 166.675C49.5656 166.234 49.5015 165.868 49.3731 165.577C49.2564 165.275 49.093 165.037 48.883 164.863C48.6846 164.688 48.4513 164.567 48.1829 164.497C47.9262 164.427 47.6578 164.392 47.3777 164.392H45.8024V169.027H47.4302C48.0954 169.027 48.6146 168.824 48.988 168.417C49.3731 167.999 49.5656 167.418 49.5656 166.675Z"
                fill="#1386C7"
              />
              <path
                d="M42.2784 169.515C42.2784 170.479 42.1851 171.362 41.9984 172.164C41.8117 172.954 41.5433 173.633 41.1932 174.202C40.8431 174.772 40.4172 175.213 39.9155 175.527C39.4137 175.84 38.8419 175.997 38.2002 175.997C37.5584 175.997 36.9808 175.84 36.4673 175.527C35.9656 175.213 35.5338 174.772 35.1721 174.202C34.822 173.633 34.5537 172.954 34.367 172.164C34.1803 171.362 34.0869 170.479 34.0869 169.515C34.0869 168.562 34.1744 167.691 34.3495 166.901C34.5362 166.1 34.8045 165.42 35.1546 164.862C35.5047 164.293 35.9306 163.852 36.4323 163.538C36.9458 163.224 37.535 163.068 38.2002 163.068C38.8419 163.068 39.4137 163.224 39.9155 163.538C40.4172 163.852 40.8431 164.293 41.1932 164.862C41.5433 165.42 41.8117 166.1 41.9984 166.901C42.1851 167.691 42.2784 168.562 42.2784 169.515ZM41.0007 169.515C41.0007 168.771 40.9423 168.074 40.8256 167.424C40.709 166.773 40.5281 166.21 40.283 165.734C40.0497 165.257 39.7579 164.88 39.4079 164.601C39.0578 164.322 38.6552 164.183 38.2002 164.183C37.7217 164.183 37.3017 164.322 36.9399 164.601C36.5899 164.88 36.2981 165.257 36.0648 165.734C35.8314 166.21 35.6564 166.773 35.5397 167.424C35.423 168.074 35.3646 168.771 35.3646 169.515C35.3646 170.258 35.423 170.955 35.5397 171.606C35.6564 172.257 35.8314 172.826 36.0648 173.314C36.2981 173.802 36.5899 174.185 36.9399 174.464C37.3017 174.742 37.7217 174.882 38.2002 174.882C38.6669 174.882 39.0753 174.742 39.4254 174.464C39.7754 174.185 40.0672 173.802 40.3005 173.314C40.5339 172.826 40.709 172.257 40.8256 171.606C40.9423 170.955 41.0007 170.258 41.0007 169.515Z"
                fill="#1386C7"
              />
              <path
                d="M28.8806 164.462V168.871H32.3637V169.933H28.8806V175.701H27.6729V163.364H32.6263V164.462H28.8806Z"
                fill="#1386C7"
              />
              <defs>
                <clipPath id="clip0_520_81324">
                  <rect
                    width="164.27"
                    height="127.627"
                    fill="white"
                    transform="matrix(0.996209 0.0869966 -0.0877637 0.996141 65.1699 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
