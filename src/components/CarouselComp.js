import React, { useContext } from "react";
import Image from "next/image";
import LanguageContext from "../context/lenguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay } from "swiper";

function CarouselComp() {
  const { lenguage } = useContext(LanguageContext);
  return (
    <Swiper
      effect={"fade"}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src="/1.jpg"
          layout="fill"
          alt="Limpia de playa Veracruz"
          objectFit="cover"
          className="position-absolute"
        />
        <div className="bg-dark opacity-50 position-absolute w-100 h-100" />

        <div className="d-flex flex-column position-relative justify-content-center align-items-center align-items-xl-end  w-100 h-100 text-center pe-xl-5">
          <div className="title fs-1 fw-bold text-light">
            FRONTEND DEVELOPER
          </div>
          <div className="text fs-6 text-light">
            <p className="d-none d-xl-block">
              {lenguage == "Es"
                ? "Estudie ingeniería en Sistemas Computacionales, Impulsador de eventos de tecnología y ciencias con la finalidad de resolver problemas sociales y mejorar la economía latinoamericana utilizando la tecnología como principa aliada."
                : lenguage == "En"
                ? "Study Engineering in Computer Systems, Promoter of technology and science events in order to solve social problems and improve the Latin American economy using technology as the main ally."
                : null}
            </p>
            <a className=" col btn btn-outline-light">
              {lenguage == "Es"
                ? "Saber Más"
                : lenguage == "En"
                ? "Know more"
                : null}
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/2.jpg"
          className="position-absolute"
          layout="fill"
          alt="IEEE Veracruz en TalentLand"
          objectFit="cover"
        />
        <div className="bg-dark opacity-50 position-absolute w-100 h-100" />
        <div className="d-flex flex-column position-relative justify-content-center align-items-center align-items-xl-end  w-100 h-100 text-center pe-xl-5">
          <div className="title fs-1 fw-bold text-light">
            FRONTEND DEVELOPER
          </div>
          <div className="text fs-6 text-light">
            <p className="d-none d-xl-block">
              {lenguage == "Es"
                ? "Estudie ingeniería en Sistemas Computacionales, Impulsador de eventos de tecnología y ciencias con la finalidad de resolver problemas sociales y mejorar la economía latinoamericana utilizando la tecnología como principa aliada."
                : lenguage == "En"
                ? "Study Engineering in Computer Systems, Promoter of technology and science events in order to solve social problems and improve the Latin American economy using technology as the main ally."
                : null}
            </p>
            <a className=" col btn btn-outline-light">
              {lenguage == "Es"
                ? "Saber Más"
                : lenguage == "En"
                ? "Know more"
                : null}
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/3.jpg"
          className="position-absolute"
          layout="fill"
          alt="Promotores de ciencia y tecnología en Veracruz"
          objectFit="cover"
        />
        <div className="bg-dark opacity-50 position-absolute w-100 h-100" />
        <div className="d-flex flex-column position-relative justify-content-center align-items-center align-items-xl-end  w-100 h-100 text-center pe-xl-5">
          <div className="title fs-1 fw-bold text-light">
            FRONTEND DEVELOPER
          </div>
          <div className="text fs-6 text-light">
            <p className="d-none d-xl-block">
              {lenguage == "Es"
                ? "Estudie ingeniería en Sistemas Computacionales, Impulsador de eventos de tecnología y ciencias con la finalidad de resolver problemas sociales y mejorar la economía latinoamericana utilizando la tecnología como principa aliada."
                : lenguage == "En"
                ? "Study Engineering in Computer Systems, Promoter of technology and science events in order to solve social problems and improve the Latin American economy using technology as the main ally."
                : null}
            </p>
            <a className=" col btn btn-outline-light">
              {lenguage == "Es"
                ? "Saber Más"
                : lenguage == "En"
                ? "Know more"
                : null}
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/4.jpg"
          className="position-absolute"
          layout="fill"
          alt="Trabajo en equipo"
        />
        <div className="bg-dark opacity-50 position-absolute w-100 h-100" />
        <div className="d-flex flex-column position-relative justify-content-center align-items-center align-items-xl-end  w-100 h-100 text-center pe-xl-5">
          <div className="title fs-1 fw-bold text-light">
            FRONTEND DEVELOPER
          </div>
          <div className="text fs-6 text-light">
            <p className="d-none d-xl-block">
              {lenguage == "Es"
                ? "Estudie ingeniería en Sistemas Computacionales, Impulsador de eventos de tecnología y ciencias con la finalidad de resolver problemas sociales y mejorar la economía latinoamericana utilizando la tecnología como principa aliada."
                : lenguage == "En"
                ? "Study Engineering in Computer Systems, Promoter of technology and science events in order to solve social problems and improve the Latin American economy using technology as the main ally."
                : null}
            </p>
            <a className=" col btn btn-outline-light">
              {lenguage == "Es"
                ? "Saber Más"
                : lenguage == "En"
                ? "Know more"
                : null}
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/5.jpg"
          className="position-absolute"
          layout="fill"
          alt="Promotores de ciencia y tecnología en Veracruz-Xalapa"
        />
        <div className="bg-dark opacity-50 position-absolute w-100 h-100" />
        <div className="d-flex flex-column position-relative justify-content-center align-items-center align-items-xl-end  w-100 h-100 text-center pe-xl-5">
          <div className="title fs-1 fw-bold text-light">
            FRONTEND DEVELOPER
          </div>
          <div className="text fs-6 text-light">
            <p className="d-none d-xl-block">
              {lenguage == "Es"
                ? "Estudie ingeniería en Sistemas Computacionales, Impulsador de eventos de tecnología y ciencias con la finalidad de resolver problemas sociales y mejorar la economía latinoamericana utilizando la tecnología como principa aliada."
                : lenguage == "En"
                ? "Study Engineering in Computer Systems, Promoter of technology and science events in order to solve social problems and improve the Latin American economy using technology as the main ally."
                : null}
            </p>
            <a className=" col btn btn-outline-light">
              {lenguage == "Es"
                ? "Saber Más"
                : lenguage == "En"
                ? "Know more"
                : null}
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/6.jpg"
          className="position-absolute"
          layout="fill"
          alt="Promotores de ciencia y tecnología en Veracruz"
        />
        <div className="bg-dark opacity-50 position-absolute w-100 h-100" />
        <div className="d-flex flex-column position-relative justify-content-center align-items-center align-items-xl-end  w-100 h-100 text-center pe-xl-5">
          <div className="title fs-1 fw-bold text-light">
            FRONTEND DEVELOPER
          </div>
          <div className="text fs-6 text-light">
            <p className="d-none d-xl-block">
              {lenguage == "Es"
                ? "Estudie ingeniería en Sistemas Computacionales, Impulsador de eventos de tecnología y ciencias con la finalidad de resolver problemas sociales y mejorar la economía latinoamericana utilizando la tecnología como principa aliada."
                : lenguage == "En"
                ? "Study Engineering in Computer Systems, Promoter of technology and science events in order to solve social problems and improve the Latin American economy using technology as the main ally."
                : null}
            </p>
            <a className=" col btn btn-outline-light">
              {lenguage == "Es"
                ? "Saber Más"
                : lenguage == "En"
                ? "Know more"
                : null}
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/7.jpg"
          className="position-absolute"
          layout="fill"
          alt="Promotores de ciencia y tecnología en Veracruz-Xalapa"
          objectFit="cover"
        />
        <div className="bg-dark opacity-50 position-absolute w-100 h-100" />
        <div className="d-flex flex-column position-relative justify-content-center align-items-center align-items-xl-end  w-100 h-100 text-center pe-xl-5">
          <div className="title fs-1 fw-bold text-light">
            FRONTEND DEVELOPER
          </div>
          <div className="text fs-6 text-light">
            <p className="d-none d-xl-block">
              {lenguage == "Es"
                ? "Estudie ingeniería en Sistemas Computacionales, Impulsador de eventos de tecnología y ciencias con la finalidad de resolver problemas sociales y mejorar la economía latinoamericana utilizando la tecnología como principa aliada."
                : lenguage == "En"
                ? "Study Engineering in Computer Systems, Promoter of technology and science events in order to solve social problems and improve the Latin American economy using technology as the main ally."
                : null}
            </p>
            <a className=" col btn btn-outline-light">
              {lenguage == "Es"
                ? "Saber Más"
                : lenguage == "En"
                ? "Know more"
                : null}
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default CarouselComp;
