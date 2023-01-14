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
import { useEffect, useState } from 'react'
import { Howl } from 'howler'
import Video from './video.mp4'
import Video2 from './video2.MP4'
import Video3 from './video3.mp4'
import Video4 from './course-video.mp4'
import Heart from './heart.png'
import map from './map.png'
const Main = () => {

  const [playing, setPlaying] = useState(true)
  const [sound, setSound] = useState(null)
  const [videoplay, setPlay] = useState(false)
  useEffect(() => {
    if(sound == null){
      const esound = new Howl({
        src: Song
      })
      setSound(esound)
    }
    else{
      sound.volume(0.1)
      sound.play()
      setPlaying(true)
    }
    console.log(playing)
  }, [sound, playing])


  const handlePlay = (e) => {
    sound.stop()
    if(!videoplay){
      setPlay(true)
    }
    else{
      Video.stop()
    }
  }


  return(
    <main>
      <header>
        <div className='menu-part first'>
          <p className='menu-slogan'>
            автор
            <br></br>
            курса
            <br></br>
            “Я-BUYER”
          </p>
        </div>
        <div className='menu-part'>
          <p className='menu-slogan'>
            лидер <br></br> эксперт-байер <br></br> ABIL’ ZARI
          </p>
        </div>
        <div className='menu-part last'>
          <p className='menu-slogan'>
            13 партнеров
            <br></br>
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
            <div className='knowledge-content evenly'>
              <div className='knowledge-container'>
                <p>
                  Знаю как покупать и продавать  эффективно бренды с оборотами в миллионы $
                </p>
              </div>
              <div className='knowledge-container'>
                <p>
                10 лет в бизнесе, 5 лет в профессии buyer. Прошла путь от новичка до гуру в PREMIUM LUX BUYING
                </p>
              </div>
            </div>
            <div className='knowledge-content around'>
              <div className='knowledge-container'>
                <p>
                  BUYER и автор самого результативного курса по байерству
                </p>
              </div>
              <div className='knowledge-container'>
                <p>
                Лицензированный яхт брокер от
                International yacht brokers association
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
                <a href='https://instagram.com/shoppingwithproffi_astana/' target='_blank' rel="noreferrer">
                  <div className='partner-container'>
                    <div className='partner-con'>
                      <div className='partner-border'>
                          <img src={Instagram} className='partner-img' alt=''></img>
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
          <div className='map-block'>
            <img src={map} alt=''/>
          </div>
          <div className='partners-review'>
            <p className='review-title'>
              ОТЗЫВЫ ПАРТНЕРОВ
            </p>
            <div className='video-container'>
              <video preload="metadata" controls className='partner-video' src={Video} onPlay={(e) => {handlePlay(e)}} type='video/mp4'>
              </video>
            </div>
            <div className='video-container'>
              <video preload="metadata" controls className='partner-video' src={Video2} onPlay={(e) => {handlePlay(e)}} type='video/mp4'>
              </video>
            </div>
          </div>

          <div className='course-block'>
            <p className='course-title'>
              КУРС Я - BUYER
            </p>
            <div className='video-container'>
              <video preload="metadata" controls className='partner-video' src={Video4} onPlay={(e) => {handlePlay(e)}} type='video/mp4'>
              </video>
            </div>
          </div>
          <div className='partners-review'>
            <p className='review-title'>
              ОТЗЫВЫ УЧЕНИКОВ
            </p>
            <div className='video-container'>
              <video preload="metadata" controls className='partner-video' src={Video3} onPlay={(e) => {handlePlay(e)}} type='video/mp4'>
              </video>
            </div>
          </div>
          <div className='about-block'>
            <p className='about-title'>
              FASHION ИЗДАНИЯ
              <br></br>
              ОБО МНЕ
            </p>

            <div className='about-container'>
              <div className='about-row'>
                <a href='https://new-magazine.ru/2022/11/22/supervumen-zarina-abilova-znaet-kak-stat-uspeshnym-bajerom/' target='_blank' rel="noreferrer">
                    <div className='about-info'>
                      <div className='about-con'>
                        <div className='about-border'>
                            <img src={Heart} className='about-img' alt=''></img>
                        </div>
                      </div>
                      <div className='about-label'>
                        Издание <br></br> “New Magazine”
                      </div>
                    </div>
                  </a>
              </div>
              <div className='about-row'>
                <a href='http://www.tele.ru/style/look/zara-abilova-nikogda-ne-otchaivaetes-ljubov-i-sudba-mogut-najti-vas-v-samyj-neozhidannyj-moment/?fbclid=PAAaYPOZ3Bn6NAJ5vhR3AuraqFMk8TtPs4u1ZR7vWuCdjIVAJtcOkV9abU8S0' target='_blank' rel="noreferrer">
                    <div className='about-info'>
                      <div className='about-con'>
                        <div className='about-border'>
                            <img src={Heart} className='about-img' alt=''></img>
                        </div>
                      </div>
                      <div className='about-label'>
                        Издание “Tele.ru”
                      </div>
                    </div>
                  </a>
                  <a href='https://www.intermoda.ru/cit/fashion-bayer-zarina-abilova-stil-eto-otrazhenie-lichnosti-i-individual-nosti.html?fbclid=PAAaa9uoG8iZ_6QV5WeJWkPhP1WajDoAH1PAZnKm6PL2C6d8pwl9nqmP07wlg' target='_blank' rel="noreferrer">
                    <div className='about-info'>
                      <div className='about-con'>
                        <div className='about-border'>
                            <img src={Heart} className='about-img' alt=''></img>
                        </div>
                      </div>
                      <div className='about-label'>
                        Издание “Intermoda”
                      </div>
                    </div>
                  </a>
              </div>
            </div>
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