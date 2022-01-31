<template>
    <footer id="footer">
        <div class="container-resepnesia py-16 z-1">
            <div id="footer__top" class="flex flex-wrap">
                <div class="footer__top__1">
                    <h4 class="text-4xl text-white mb-5"><strong class="font-bold">Resep</strong>nesia</h4>
                    <p class="text-16px text-white"><strong class="font-bold">Resepnesia</strong> adalah website penyedia resep khas nusantara. Tujuan kami untuk melestarikan budaya di bidang kuliner.</p>
                </div>
                <div class="footer__top__2">
                    <router-link to="/" class="block text-14px text-white mb-6">Tentang</router-link>
                    <router-link to="/" class="block text-14px text-white mb-6">Hubungi</router-link>
                    <router-link to="/" class="block text-14px text-white mb-6">Syarat dan ketentuan</router-link>
                    <router-link to="/" class="block text-14px text-white mb-6">Masukan dan Bantuan</router-link>
                </div>
                <div class="footer__top__3 absolute left-1/2 transform -translate-x-1/2">
                    <img src="@/assets/images/footer-hut.png" alt="Footer HUT">
                </div>
                <div class="footer__top__4 ml-auto">
                    <label for="berlangganan" class="block font-bold text-18px text-white mb-3">Berlangganan Email</label>
                    <div class="relative flex items-center justify-between">
                        <svg class="absolute top-1/2 left-5 transform -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6969 5.9625C15.8187 5.86563 16 5.95625 16 6.10938V12.5C16 13.3281 15.3281 14 14.5 14H1.5C0.671875 14 0 13.3281 0 12.5V6.1125C0 5.95625 0.178125 5.86875 0.303125 5.96562C1.00312 6.50937 1.93125 7.2 5.11875 9.51562C5.77813 9.99687 6.89062 11.0094 8 11.0031C9.11563 11.0125 10.25 9.97813 10.8844 9.51562C14.0719 7.2 14.9969 6.50625 15.6969 5.9625ZM8 10C8.725 10.0125 9.76875 9.0875 10.2937 8.70625C14.4406 5.69688 14.7562 5.43437 15.7125 4.68437C15.8937 4.54375 16 4.325 16 4.09375V3.5C16 2.67188 15.3281 2 14.5 2H1.5C0.671875 2 0 2.67188 0 3.5V4.09375C0 4.325 0.10625 4.54062 0.2875 4.68437C1.24375 5.43125 1.55938 5.69688 5.70625 8.70625C6.23125 9.0875 7.275 10.0125 8 10Z" fill="#CACACA"/>
                        </svg>
                        <input type="email" name="berlangganan" id="berlangganan" placeholder="Masukkan email kamu">
                        <button type="button">Kirim</button>
                    </div>
                </div>
            </div>
            <div id="footer__bottom">
                <div class="flex flex-wrap items-end justify-between">
                    <div>
                        <p class="text-12px text-white">© Copyright <strong class="font-bold">Resep</strong>nesia 2021 all right reserved</p>
                    </div>
                    <div>
                        <div class="flex justify-end items-center mb-7">
                            <button class="text-14px text-white">English</button>
                            <span class="text-white px-3.5">|</span>
                            <button class="font-bold text-14px text-white">Indonesia</button>
                        </div>
                        <div class="flex items-center">
                            <p class="font-bold text-14px text-white mr-6">Ikuti kami</p>
                            <a href="/">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6258 8.30496C21.6157 7.54758 21.4739 6.79773 21.2068 6.08896C20.9751 5.49111 20.6213 4.94816 20.168 4.49479C19.7146 4.04142 19.1716 3.68761 18.5738 3.45596C17.8741 3.19331 17.135 3.0513 16.3878 3.03596C15.4258 2.99296 15.1208 2.98096 12.6788 2.98096C10.2368 2.98096 9.92378 2.98096 8.96878 3.03596C8.22194 3.05141 7.48313 3.19343 6.78378 3.45596C6.18584 3.68745 5.6428 4.0412 5.18941 4.49459C4.73603 4.94798 4.38227 5.49102 4.15078 6.08896C3.88761 6.78809 3.7459 7.52707 3.73178 8.27396C3.68878 9.23696 3.67578 9.54196 3.67578 11.984C3.67578 14.426 3.67578 14.738 3.73178 15.694C3.74678 16.442 3.88778 17.18 4.15078 17.881C4.38266 18.4787 4.73668 19.0215 5.19022 19.4747C5.64376 19.9279 6.18685 20.2815 6.78478 20.513C7.48221 20.7862 8.22115 20.9383 8.96978 20.963C9.93278 21.006 10.2378 21.019 12.6798 21.019C15.1218 21.019 15.4348 21.019 16.3898 20.963C17.1369 20.9482 17.8761 20.8066 18.5758 20.544C19.1735 20.312 19.7163 19.9581 20.1696 19.5048C20.623 19.0515 20.9769 18.5086 21.2088 17.911C21.4718 17.211 21.6128 16.473 21.6278 15.724C21.6708 14.762 21.6838 14.457 21.6838 12.014C21.6818 9.57196 21.6818 9.26196 21.6258 8.30496ZM12.6728 16.602C10.1188 16.602 8.04978 14.533 8.04978 11.979C8.04978 9.42496 10.1188 7.35596 12.6728 7.35596C13.8989 7.35596 15.0748 7.84302 15.9417 8.71C16.8087 9.57698 17.2958 10.7529 17.2958 11.979C17.2958 13.2051 16.8087 14.3809 15.9417 15.2479C15.0748 16.1149 13.8989 16.602 12.6728 16.602ZM17.4798 8.26296C17.3382 8.26309 17.1979 8.2353 17.0671 8.18117C16.9362 8.12704 16.8174 8.04764 16.7172 7.94751C16.6171 7.84738 16.5377 7.72849 16.4836 7.59765C16.4294 7.4668 16.4016 7.32656 16.4018 7.18496C16.4018 7.04346 16.4297 6.90334 16.4838 6.77262C16.538 6.64189 16.6173 6.5231 16.7174 6.42305C16.8174 6.32299 16.9362 6.24363 17.0669 6.18948C17.1977 6.13533 17.3378 6.10746 17.4793 6.10746C17.6208 6.10746 17.7609 6.13533 17.8916 6.18948C18.0224 6.24363 18.1411 6.32299 18.2412 6.42305C18.3412 6.5231 18.4206 6.64189 18.4748 6.77262C18.5289 6.90334 18.5568 7.04346 18.5568 7.18496C18.5568 7.78096 18.0748 8.26296 17.4798 8.26296Z" fill="white"/>
<path d="M12.6749 14.9821C14.3334 14.9821 15.6779 13.6376 15.6779 11.9791C15.6779 10.3206 14.3334 8.97607 12.6749 8.97607C11.0164 8.97607 9.67188 10.3206 9.67188 11.9791C9.67188 13.6376 11.0164 14.9821 12.6749 14.9821Z" fill="white"/>
</svg>
                            </a>
                            <a href="/" class="ml-3">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_804_3575)">
<path d="M24.3232 4.93708C23.4882 5.30708 22.5912 5.55708 21.6482 5.67008C22.6212 5.08787 23.3491 4.17154 23.6962 3.09208C22.782 3.63507 21.7815 4.01727 20.7382 4.22208C20.0366 3.47294 19.1073 2.9764 18.0945 2.80955C17.0818 2.6427 16.0423 2.81487 15.1374 3.29933C14.2326 3.78379 13.513 4.55344 13.0903 5.48878C12.6677 6.42412 12.5657 7.47283 12.8002 8.47208C10.9479 8.37907 9.13582 7.89763 7.48161 7.05898C5.82741 6.22034 4.36803 5.04324 3.19819 3.60408C2.79819 4.29408 2.56819 5.09408 2.56819 5.94608C2.56774 6.71307 2.75662 7.46832 3.11807 8.14481C3.47951 8.8213 4.00235 9.39812 4.64019 9.82408C3.90046 9.80054 3.17706 9.60066 2.53019 9.24108V9.30108C2.53011 10.3768 2.90222 11.4195 3.58337 12.2521C4.26452 13.0847 5.21276 13.656 6.26719 13.8691C5.58097 14.0548 4.86153 14.0821 4.16319 13.9491C4.46069 14.8747 5.04018 15.6841 5.82056 16.264C6.60093 16.8439 7.54311 17.1653 8.51519 17.1831C6.86502 18.4785 4.82708 19.1812 2.72919 19.1781C2.35757 19.1782 1.98626 19.1565 1.61719 19.1131C3.74666 20.4823 6.22553 21.2089 8.75719 21.2061C17.3272 21.2061 22.0122 14.1081 22.0122 7.95208C22.0122 7.75208 22.0072 7.55008 21.9982 7.35008C22.9095 6.69105 23.6961 5.87497 24.3212 4.94008L24.3232 4.93708Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_804_3575">
<rect width="24" height="24" fill="white" transform="translate(0.679688)"/>
</clipPath>
</defs>
</svg>
                            </a>
                            <a href="/" class="ml-3">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.0789 1.19971H4.27891C2.95891 1.19971 1.87891 2.27971 1.87891 3.59971V20.3997C1.87891 21.7209 2.95891 22.7997 4.27891 22.7997H12.6789V14.3997H10.2789V11.4297H12.6789V8.96971C12.6789 6.37291 14.1333 4.54891 17.1981 4.54891L19.3617 4.55131V7.67731H17.9253C16.7325 7.67731 16.2789 8.57251 16.2789 9.40291V11.4309H19.3605L18.6789 14.3997H16.2789V22.7997H21.0789C22.3989 22.7997 23.4789 21.7209 23.4789 20.3997V3.59971C23.4789 2.27971 22.3989 1.19971 21.0789 1.19971Z" fill="white"/>
</svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img class="h-full absolute top-0 right-0" src="@/assets/images/footer-background.png" alt="Footer Background">
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    #footer {
        background: linear-gradient(159.87deg, #F05454 0%, #983232 162.48%);
        position: relative;
        #footer__top {
            margin-bottom: 55px;
            .footer__top__1 {
                width: 221.31px;
                margin-right: 95px;
            }
            .footer__top__2 {
                width: auto;
            }
            .footer__top__4 {
                width: 400px;
                input {
                    height: 54px;
                    width: 294px;
                    background-color: #FFFFFF;
                    font-size: 14px;
                    padding-left: 49px;
                    border-radius: 8px;
                }
                input:placeholder {
                    color: #cacaca;
                }
                button {
                    height: 54px;
                    width: 96px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #AA3E3E;
                    border-radius: 8px;
                    font-size: 14px;
                    color: #fff;
                }
            }
        }
    }
</style>