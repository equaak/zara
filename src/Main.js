import './Main.css'
import './MainPhone.css'
import Logo from './instagram_logo.png'
import AdFirst from './advantages_first.png'
import AdSecond from './advantages_second.png'
import AdThird from './advantages_third.png'
import SelFirst from './selection_first.png'
import SelSecond from './selection_second.png'
import SelThird from './selection_third.png'
import Instagram from './instagram_sign.png'
import Whatsapp from './whatsapp_sign.png'
import Telegram from './telegram_sign.png'
import Butterfly from './butterfly.png'
import Song from './Song.mp3'
import { useEffect } from 'react'
import { Howl } from 'howler'

const Main = () => {
  useEffect(() => {
    console.log('playing')
    const sound = new Howl({
      src: Song
    })
    sound.volume(0.2)
    sound.play()
  }, [])

  return(
    <main>
      <header>
        <div className='menu-part first'>
          <p className='menu-slogan'>
            лидер и лучший
            эксперт-байер  ABIL’ ZARI
          </p>
        </div>
        <div className='menu-part'>
          <p className='menu-slogan'>
            автор курса
            “Я-BUYER”
          </p>
        </div>
        <div className='menu-part last'>
          <p className='menu-slogan'>
            13 партнеров
            1000 выпускников
          </p>
        </div>
      </header>

      <div className='main-content'>
          <div className='first-block'>
            <div className='butterfly-block'>
              <img className='butterfly-img' src={Butterfly} alt=''>
              </img>
            </div>
            <div className='first-main'>
              <p className='main-text'>
                ABIL’ ZARI
              </p>
            </div>
            <div className='advatages-block'>
              <div className='advantages-block-first'>
                <img src={AdFirst} className='advantage-img' alt=''/>
                <p className='advatages-text'>
                  Сделала бренды доступными
                </p>
              </div>
              <div className='advantages-block-second'>
                <img src={AdSecond} className='advantage-img' alt=''/>
                <p className='advatages-text'>
                  Создала сеть партнеров SWP: США, Казахстан, Россия, Кыргызстан, Турция, Узбекистан
                </p>
              </div>
              <div className='advantages-block-third'>
                <img src={AdThird} className='advantage-img' alt=''/>
                <p className='advatages-text'>
                  Обучила профессии 1000 учеников
                </p>
              </div>
            </div>
          </div>
          <div className='instagram-block'>
            <a href='https://instagram.com/shoppingwith__profi?igshid=YmMyMTA2M2Y=' target='_blank' rel="noreferrer">
              <button className='instgram-button'>
                Перейти в инстаграм
              </button>
            </a>
            <div className='ilogo-block'>
              <img src={Logo} alt=''/>
            </div>
          </div>
          <div className='recommendation-block'>
            <div className='recommendation-title-block'>
              <p className='recommedation-title'>
                Меня выбирают
              </p>
              <p className='recommendation-subtitle'>
                и рекомендуют
              </p>
            </div>
            <div className='selection-block'>
              <div className='selection-container'>
                <div className='selection-con'>
                  <div className='img-border'>
                    <img src={SelFirst} className='selection-img' alt=''/>
                  </div>
                </div>
                <div className='selection'>
                  <p>
                    Блогеры миллионники
                  </p>
                </div>
              </div>
              <div className='selection-container'>
                <div className='selection-con'>
                  <div className='img-border'>
                    <img src={SelSecond} className='selection-img' alt=''/>
                  </div>
                </div>
                <div className='selection'>
                  <p>
                    Десятки тысяч довольных клиентов
                  </p>
                </div>
              </div>
              <div className='selection-container'>
                <div className='selection-con'>
                  <div className='img-border'>
                    <img src={SelThird} className='selection-img' alt=''/>
                  </div>
                </div>
                <div className='selection'>
                  <p>
                    Медийные личности
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='knowledge-block'>
            <p className='knowledge-title'>
              ЗНАЮ КАК СДЕЛАТЬ БРЕНДЫ
              <br></br>
              <strong>ДОСТУПНЫМИ</strong>
            </p>
            <div className='knowledge-content'>
              <div className='knowledge-container'>
                <p>
                  BUYER и автор самого результативного курса по байерству  в мире онлайн-обучения
                </p>
              </div>
              <div className='knowledge-container'>
                <p>
                    5 лет в сфере байерства
                    Прошла путь
                    от новичка до  гуру
                    в LUX FASHION BUYING
                </p>
              </div>
              <div className='knowledge-container'>
                <p>
                  Знаю как покупать и продавать  эффективно бренды с оборотами в миллионы $
                </p>
              </div>
            </div>
          </div>
          <div className='partners-block'>
            <p className='partners-title'>
              МОИ ПАРТНЕРЫ
            </p>
            <img src={Logo} className='partners-logo' alt=''/>

            <div className='partners-list'>
              <div className='partners-row'>
                <a href='https://www.instagram.com/shoppingwithproffi.kz/' target='_blank' rel="noreferrer">
                  <div className='partner-container'>
                    <div className='partner-con'>
                      <div className='partner-border'>
                          <img src={Instagram} className='partner-img' alt=''></img>
                      </div>
                    </div>
                    <div className='partner'>
                      @shoppingwithproffi.kz
                    </div>
                  </div>
                </a>
                <a href='https://www.instagram.com/bayer_zhuldyz/' target='_blank' rel="noreferrer">
                  <div className='partner-container'>
                    <div className='partner-con'>
                      <div className='partner-border'>
                          <img src={Instagram} className='partner-img' alt=''></img>
                      </div>
                    </div>
                    <div className='partner fromtop'>
                      @bayer_zhuldyz
                    </div>
                  </div>
                </a>
                <a href='https://www.instagram.com/ohmybuyer.kz/' target='_blank' rel="noreferrer">
                  <div className='partner-container'>
                    <div className='partner-con'>
                      <div className='partner-border'>
                          <img src={Instagram} className='partner-img' alt=''></img>
                      </div>
                    </div>
                    <div className='partner'>
                      @ohmybuyer.kz
                    </div>
                  </div>
                </a>
              </div>
              <div className='partners-row'>
                <a href='https://www.instagram.com/shoppingwith_profi.kg.tr/' target='_blank' rel="noreferrer">
                  <div className='partner-container'>
                    <div className='partner-con'>
                      <div className='partner-border'>
                          <img src={Instagram} className='partner-img' alt=''></img>
                      </div>
                    </div>
                    <div className='partner'>
                      @shoppingwith_profi.kg.tr
                    </div>
                  </div>
                </a>
                <a href='https://www.instagram.com/shoppingprofi_kz/' target='_blank' rel="noreferrer">
                  <div className='partner-container'>
                    <div className='partner-con'>
                      <div className='partner-border'>
                          <img src={Instagram} className='partner-img' alt=''></img>
                      </div>
                    </div>
                    <div className='partner fromtop'>
                      @shoppingprofi_kz
                    </div>
                  </div>
                </a>
              </div>
              <div className='partners-row'>
                <a href='https://www.instagram.com/shoppingwithprofi_almaty/' target='_blank' rel="noreferrer">
                  <div className='partner-container'>
                    <div className='partner-con'>
                      <div className='partner-border'>
                          <img src={Instagram} className='partner-img' alt=''></img>
                      </div>
                    </div>
                    <div className='partner'>
                      @shoppingwithprofi_almaty
                    </div>
                  </div>
                </a>
                <a href='https://www.instagram.com/shopping_with_aiken/' target='_blank' rel="noreferrer">
                  <div className='partner-container'>
                    <div className='partner-con'>
                      <div className='partner-border'>
                          <img src={Instagram} className='partner-img' alt=''></img>
                      </div>
                    </div>
                    <div className='partner frombot'>
                      @shopping_with_aiken
                    </div>
                  </div>
                </a>
                <a href='https://www.instagram.com/originalonly_aktau/' target='_blank' rel="noreferrer">
                  <div className='partner-container'>
                    <div className='partner-con'>
                      <div className='partner-border'>
                          <img src={Instagram} className='partner-img' alt=''></img>
                      </div>
                    </div>
                    <div className='partner'>
                      @originalonly_aktau
                    </div>
                  </div>
                </a>
              </div>
              <div className='partners-row'>

                <a href='https://instagram.com/shoppingpro_centralasia/' target='_blank' rel="noreferrer">
                  <div className='partner-container'>
                    <div className='partner-con'>
                      <div className='partner-border'>
                          <img src={Instagram} className='partner-img' alt=''></img>
                      </div>
                    </div>
                    <div className='partner fromtop'>
                    @shoppingpro_centralasia
                    </div>
                  </div>
                </a>
                <a href='https://instagram.com/vip_buyer_alfiya/' target='_blank' rel="noreferrer">
                  <div className='partner-container'>
                    <div className='partner-con'>
                      <div className='partner-border'>
                          <img src={Instagram} className='partner-img' alt=''></img>
                      </div>
                    </div>
                    <div className='partner'>
                      @vip_buyer_alfiya
                    </div>
                  </div>
                </a>
                <a href='https://instagram.com/shoppingwithprofi_home_goods/' target='_blank' rel="noreferrer">
                  <div className='partner-container'>
                    <div className='partner-con'>
                      <div className='partner-border'>
                          <img src={Instagram} className='partner-img' alt=''></img>
                      </div>
                    </div>
                    <div className='partner frombot'>
                      @shoppingwithprofi_home_goods
                    </div>
                  </div>
                </a>
              </div>
              <div className='partners-row'>
                <a href='https://instagram.com/shoppingwithproffi_astana/' target='_blank'>
                  <div className='partner-container'>
                    <div className='partner-con'>
                      <div className='partner-border'>
                          <img src={Instagram} className='partner-img'></img>
                      </div>
                    </div>
                    <div className='partner fromtop'>
                      @shoppingwithproffi_astana
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='partners-review'>
            <p className='review-title'>
              ОТЗЫВЫ ПАРТНЕРОВ
            </p>
          </div>
          <div className='course-block'>
            <p className='course-title'>
              КУРС Я - BUYER
            </p>
          </div>
          <div className='partners-review'>
            <p className='review-title'>
              ОТЗЫВЫ УЧЕНИКОВ
            </p>
          </div>
          <div className='about-block'>
            <p className='about-title'>
              FASHION ИЗДАНИЯ
              ОБО МНЕ
            </p>
          </div>
          <div className='contacts-block'>
            <p className='contacts-title'>
              КОНТАКТЫ
            </p>

            <div className='contact-row'>
              <a href='https://t.me/+dJakFgIRy9BkZjMx' target='_blank' rel="noreferrer">
                <div className='contact-card'>
                  <div className='contact-border'>
                    <img src={Telegram} className='contact-img' alt=''>
                    </img>
                  </div>
                </div>
              </a>
              <a href='https://api.whatsapp.com/send?phone=19415863261' target='_blank' rel="noreferrer">
                <div className='contact-card fill'>
                  <div className='contact-border filled'>
                    <img src={Whatsapp} className='contact-img' alt=''>
                    </img>
                  </div>
                </div>
              </a>
            </div>
          </div>
      </div>
    </main>
  )
}


export default Main;