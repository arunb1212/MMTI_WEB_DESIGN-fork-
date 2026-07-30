import Footer from "../Components/Footer";
import "./Faculty.css";

export default function Faculty() {
  const directorData = [
    { id: "", name: "CAPT. C. L. DUBEY, TRUSTEE / DIRECTOR" },
    { id: "", name: "CAPT. O. P. YADAV, TRUSTEE / DIRECTOR" },
  ];

  const facultyData = [
    { id: "1", name: "CAPT. F. X. COUTINHO, PRINCIPAL" },
    { id: "2", name: "CAPT. M. R. MARTINS, VICE PRINCIPAL" },
    { id: "3", name: "CAPT.S.K.SHARMA" },
    { id: "4", name: "CAPT.S.K.PRASAD" },
    { id: "5", name: "CAPT.S.GOMEZ" },
    { id: "6", name: "CAPT. A. SAYED" },
    { id: "7", name: "CAPT.R.J.KARAI" },
    { id: "8", name: "CAPT. B.K.DUTTA" },
    { id: "9", name: "CAPT. MICHAEL JACQUET" },
    { id: "10", name: "CAPT. F. TOSCANO" },
    { id: "11", name: "CAPT. RIYAZ AHMED YUSUF KAZI" },
    { id: "12", name: "CAPT. ZAHID ALI MULLA" },
    { id: "13", name: "CAPT. RAMAN GADHOK" },
    { id: "14", name: "CAPT. L.K.PANDA, (EX.NA)" },
    { id: "15", name: "CAPT. Y. CHHABRA" },
    { id: "16", name: "CAPT. UPPAL" },
    { id: "17", name: "CAPT. AMIT CHHABRA" },
    { id: "18", name: "MR AJIT SINHA, C/E" },
    { id: "19", name: "MR.UBALDO VAZ, R/O" },
    { id: "20", name: "MR. JAGDISHWAR SANGAM, R/O" },
    { id: "21", name: "MR. KUNAL THAKUR, R/O" },
    { id: "22", name: "DR. SUBHASH GAJARIA" },
    { id: "23", name: "DR. NEELAM KARANDE" },
    { id: "24", name: "DR. GURUNATH BANKAPUR" },
    { id: "25", name: "NURSE. SANJANA RAUT" },
    { id: "26", name: "MR. B. BHOMICK, INSTR." },
    { id: "27", name: "MR. SHER BAHADUR YADAV, INSTR." },
    { id: "28", name: "MR. S.K.CHAUHAN, INSTR." },
  ];
  const mid = Math.ceil(facultyData.length / 2);
  const leftData = facultyData.slice(0, mid);
  const rightData = facultyData.slice(mid);

  return (
    <section id="faculty" className="faculty">
      <h2 className="section-title">Our Directors</h2>
      <div className="about-image">
        <div className="director-card">
          <img
            src="/photo_gallery/capt.cl dubey.png"
            alt="Capt. C. L. Dubey"
            className="director-img"
          />
          <div className="director-name">Capt. C. L. Dubey</div>
        </div>

        <div className="director-card">
          <img
            src="/photo_gallery/capt.op yadav.png"
            alt="Capt. O. P. Yadav"
            className="director-img"
          />
          <div className="director-name">Capt. O. P. Yadav</div>
        </div>
      </div>
      <div className="faculty-container">
        <h2 className="section-title">Our Faculty</h2>

        <div className="faculty-table-wrapper">
          <table className="faculty-table">
            <tbody>
              {leftData.map((faculty, idx) => (
                <tr key={idx} className={faculty.id === "" ? "header-row" : ""}>
                  <td>{faculty.id}</td>
                  <td>
                    <img
                      className="faculty-img"
                      src="/img/empty_profile.png"
                      alt="Faculty photo"
                    />
                  </td>
                  <td>{faculty.name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="faculty-table">
            <tbody>
              {rightData.map((faculty, idx) => (
                <tr key={idx} className={faculty.id === "" ? "header-row" : ""}>
                  <td>{faculty.id}</td>
                  <td>
                    <img
                      className="faculty-img"
                      src="/img/empty_profile.png"
                      alt="Faculty photo"
                    />
                  </td>
                  <td>{faculty.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="faculty-header">
          <p className="faculty-subtitle">
            The MMTI is proud of having one of the best faculty in Maritime
            Training sector. The faculties here are of diversified nature such
            as Master Mariners, Chief Engineer, MBBS (Doctor), H.R.D Personnel,
            Radio Officers & Indian Navy instructors. Most of the faculty is
            highly qualified well experienced in Maritime training and best in
            the art of sharing knowledge.
            <br />
            <br />
            Presently there are 3 extra masters who are teaching at MMTI Andheri
            (W) campus. Eg: Capt. C.L. Dubey, Capt.L.K.Panda (Visiting).
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
