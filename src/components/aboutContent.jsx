import React, { Component } from "react";
import "./aboutContent.css";

export default class AboutContent extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="title-about">
          <h1>About us</h1>
        </div>
        <div className="about-content">
          <img
            src={require("../assets/lab-img.jpg")}
            alt="pict lab ilustration"
            className="lab-pict"
          />
          <div className="text-about">
            <div className="welcome-text-about">
              <h3>Welcome to "Lab Informatika UMM"</h3>
              <h4>
                Laboratorium Teknik Informatika berfungsi sebagai pusat
                pembelajaran praktis dan eksperimental yang dipergunakan oleh
                mahasiswa dan pelayanan untuk riset dan konsultasi keteknikan
                mencakup desain sofware untuk animasi, administrasi, grafis dll.
              </h4>
            </div>
            <div className="lab-list-text">
              <ol>
                <li>Laboratorium Rekayasa Perangkat Lunak</li>
                <h4>
                  Melakukan analisa kelayakan pembuatan, penerapan proyek
                  perangkat lunak, analisa kebutuhan, perancangan, pembuatan dan
                  penjaminan kualitas perangkat lunak serta melakukan rekayasa
                  ulang perangkat lunak.
                </h4>
                <li>Laboratorium Sistem dan Keamanan Jaringan</li>
                <h4>
                  Menganalisis permasalahan, memberikan solusi berupa
                  perekayasaan, pembuatan dan pengelolaan, serta melakukan
                  evaluasi pada sistem jaringan.
                </h4>
                <li>Laboratorium Game Cerdas</li>
                <h4>
                  Bekerja dengan tim mengembangkan dan merancang video game.
                  Mengkoordinasikan tugas kompleks menciptakan video game baru
                  yang memiliki tugas seperti merancang karakter, level,
                  teka-teki, art dan animasi. Software Engineer, Programmer,
                  atau Computer Scientist yang terutama mengembangkan basis kode
                  untuk video game atau perangkat lunak terkait, seperti
                  alat-alat pengembangan game.
                </h4>
                <li>Laboratorium Sains Data</li>
                <h4>
                  Menganalisis dan mengolah data menjadi suatu informasi dan
                  pengetahuan.
                </h4>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
