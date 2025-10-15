
//academic//page.tsx//

const academic = () => {
  return (
<>
    <section className="academic_banner_container">
      {/* ====== Background Wavy Lines ====== */}
      <div className="waves">
        {[1, 2, 3, 4, 5].map((line) => (
          <svg
            key={line}
            className={`wave_line line${line}`}
            viewBox="0 0 1441 538"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M147.779 87.8706C300.314 51.7182 452.224 7.0047 610.41 30.4613C689.498 42.1888 770.151 70.9571 850.535 97.57C930.944 124.191 1011.09 148.659 1089.26 151.86C1245.6 158.264 1394.15 79.5992 1468.5 40.2236L1542.83 0.855829L1543.5 0.499615L1581.24 410.459L1505.95 415.62L1505.85 414.624L1580.15 409.532L1542.64 2.09474L1468.98 41.1072C1394.67 80.4674 1245.89 159.274 1089.24 152.858C1010.91 149.65 930.64 125.135 850.239 98.516C769.813 71.8891 689.263 43.1598 610.284 31.4485C452.338 8.02749 300.656 52.6692 148.032 88.8426C-4.56184 125.009 -157.938 152.659 -234.619 166.483L-310.861 180.228L-278.027 536.895L-204.919 531.884L-204.827 532.88L-278.933 537.959L-311.941 179.404L-311.501 179.325L-234.819 165.501C-158.137 151.677 -4.78582 124.03 147.779 87.8706Z"
              fill="#E8E8E8"
              opacity={0.3 + line * 0.1}
            />
          </svg>
        ))}
      </div>

      {/* ====== Heading Section ====== */}
      <div className="banner_content">
        <h1>Diverse Learning Paths:</h1>
        <h2>
          Types & Grades of <span>YES INDIA</span> Institutes
        </h2>
      </div>

      {/* ====== Floating Icons ====== */}
      <div className="floating_icon icon_left">

  <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.833 27.1667C18.5274 27.4722 18.1385 27.625 17.6663 27.625C17.1941 27.625 16.8052 27.4722 16.4996 27.1667L9.33298 19.9584C9.02743 19.6528 8.78465 19.2989 8.60465 18.8967C8.42465 18.4945 8.33409 18.0706 8.33298 17.625L8.33298 6.45836L5.20798 9.58336C4.87465 9.91669 4.47909 10.0834 4.02132 10.0834C3.56354 10.0834 3.16743 9.91669 2.83298 9.58336C2.49854 9.25003 2.33187 8.86114 2.33298 8.41669C2.33409 7.97225 2.50076 7.58336 2.83298 7.25003L8.83298 1.20836C8.99965 1.04169 9.18021 0.923914 9.37465 0.855026C9.56909 0.786137 9.77743 0.751137 9.99965 0.750026C10.2219 0.748915 10.4302 0.783914 10.6247 0.855026C10.8191 0.926137 10.9996 1.04391 11.1663 1.20836L17.1663 7.16669C17.4996 7.50003 17.6663 7.89614 17.6663 8.35503C17.6663 8.81391 17.4996 9.20947 17.1663 9.54169C16.833 9.87392 16.4374 10.0478 15.9796 10.0634C15.5219 10.0789 15.1258 9.91891 14.7913 9.58336L11.6663 6.45836L11.6663 17.6667L18.833 24.8334C19.1385 25.1389 19.2913 25.5278 19.2913 26C19.2913 26.4722 19.1385 26.8611 18.833 27.1667ZM1.16632 27.2084C0.832982 26.875 0.672983 26.4795 0.686316 26.0217C0.69965 25.5639 0.859649 25.1817 1.16632 24.875L4.12465 21.875C4.45798 21.5417 4.85409 21.375 5.31298 21.375C5.77187 21.375 6.16743 21.5417 6.49965 21.875C6.83187 22.2084 6.99187 22.6045 6.97965 23.0634C6.96743 23.5222 6.79354 23.9178 6.45798 24.25L3.49965 27.2084C3.19409 27.5139 2.80521 27.6667 2.33298 27.6667C1.86076 27.6667 1.47187 27.5139 1.16632 27.2084Z" fill="white"/>
</svg>

      </div>
      <div className="floating_icon icon_top_right">
  <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.142717 13.8203L15.0713 13.8203L24.8927 3.99888L20.4731 3.99888V0.0703126L31.5713 0.0703125V11.1685L27.6427 11.1685V6.74888L17.7722 16.6194C17.4121 16.9795 16.9943 17.2578 16.519 17.4542C16.0436 17.6507 15.5447 17.7489 15.0222 17.7489L0.142717 17.7489V13.8203Z" fill="white"/>
</svg>


      </div>
      <div className="floating_icon icon_bottom_right">
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8213 30.812C11.9858 30.5864 9.27477 29.5515 7.01015 27.8304C4.74553 26.1094 3.02255 23.7744 2.04593 21.1029C1.0693 18.4314 0.880076 15.5357 1.50073 12.7598C2.12138 9.98396 3.52583 7.4446 5.54721 5.44343C7.56859 3.44227 10.1219 2.06341 12.9039 1.47069C15.6859 0.877964 18.5795 1.09628 21.241 2.09971C23.9026 3.10313 26.2201 4.84949 27.9184 7.13129C29.6166 9.41309 30.6242 12.1344 30.8213 14.972" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5089 22.3777C12.4465 21.965 11.5037 21.2939 10.7659 20.4252C10.028 19.5565 9.51832 18.5176 9.28289 17.4025C9.04746 16.2873 9.09372 15.131 9.41748 14.0382C9.74124 12.9454 10.3323 11.9505 11.1372 11.1436C11.9421 10.3366 12.9354 9.74299 14.0274 9.41641C15.1194 9.08984 16.2755 9.04061 17.3913 9.27316C18.5071 9.50572 19.5473 10.0127 20.4179 10.7483C21.2884 11.484 21.9619 12.425 22.3774 13.4863M16.0003 16.0006L21.7146 21.7149M21.7146 21.7149L20.5717 26.2863L25.1431 30.8577L26.286 26.2863L30.8574 25.1434L26.286 20.572L21.7146 21.7149Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </div>
      
    </section>

    <section className="wrapper_section academic_content_wrapper">
      <p><span>YES India Foundation</span> provides a range of educational options tailored to different age groups and needs. Our institutes cater to various academic levels, from primary to higher secondary, and include specialised educational institutes too, ensuring quality and combining moral studies too. This diversity ensures that students receive an education that is both comprehensive and suited to their individual learning stages, family financial stability, blending modern subjects with moral studies.</p>

   <div className="grade_card_container">
  {[
    {
      title: "Grade A",
      color: "#2A1B63",
      sections: [
        "For Financially Upper",
        "Profitable",
        "Investment For Infrastructure Through YESFIN Developers + Donation",
        "Profit Dividend To Investors And Grade D Institutions",
      ],
    },
    {
      title: "Grade B",
      color: "#A5874C",
      sections: [
        "For Financially Stable",
        "Profitable",
        "Investment For Infrastructure Through YESFIN Developers + Donation",
        "Profit Dividend To Investors And Grade D Institutions",
      ],
    },
    {
      title: "Grade C",
      color: "#2A1B63",
      sections: [
        "For Financially Middle",
        "Break Even",
        "Loan For Infrastructure (Return By 10 Years) + Donation",
        "Break Even",
      ],
    },
    {
      title: "Grade D",
      color: "#A5874C",
      sections: [
        "For Poor And Down",
        "Charitable",
        "Donation For Infrastructure",
        "Running Expense By YES India Foundation",
      ],
    },
  ].map((grade, idx) => (
    <div
      key={idx}
      className="grade_card"
      style={{ borderColor: grade.color }}
    >
      <div className="grade_header" style={{ backgroundColor: grade.color }}>
        {grade.title}
      </div>
      {grade.sections.map((text, i) => (
        <div className="grade_section" key={i}>
          {text}
        </div>
      ))}
    </div>
  ))}
</div>

    </section>

    <section className="wrapper_section">

    </section>
</>
  );
};

export default academic;

