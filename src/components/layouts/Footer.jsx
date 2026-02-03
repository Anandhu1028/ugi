const Footer = () => {
  return (
    <footer
      className="cs_footer text-white"
      style={{
        backgroundImage: "url('/assets/img/footer_bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        {/* Footer Top */}
        <div className="cs_footer_top d-flex justify-content-between align-items-start align-items-md-center cs_pt_46 cs_pb_46 cs_column_gap_15 cs_row_gap_15 flex-md-row flex-column">
          <div className="cs_footer_contact_info">
            <h3 className="text-accent fw-normal cs_mb_4 cs_fs_16 cs_lh_lg">
              Have Any Question?
            </h3>
            <h2 className="text-white fw-medium m-0 cs_fs_22">
              +971 4342 8008
            </h2>
          </div>

          <div className="cs_footer_logo">
            <img src="/assets/img/ugi-light.webp" alt="UGI Logo" />
          </div>

          <div className="cs_footer_contact_info">
            <h3 className="text-accent fw-normal cs_mb_4 cs_fs_16 cs_lh_lg">
              Send Email
            </h3>
            <h2 className="text-white fw-medium m-0 cs_fs_22">
              <a href="mailto:info@uginitiative.com">
                info@uginitiative.com
              </a>
            </h2>
          </div>
        </div>

        {/* Footer Main */}
        <div className="cs_footer_main cs_pt_30 cs_pb_30">
          <div className="row">

            {/* Column 1 */}
            <div className="col-lg-4">
              <div className="cs_footer_item cs_pt_20 cs_pb_20">
                <div className="cs_text_widget">
                  <p>
                    UGI is a consortium of leading companies from sectors
                    including Education, IT, Automotive, Tourism, Luxury Brand
                    and much more spread across an arena of five nations and
                    still expanding. UGI is headquartered in Dubai known as the
                    land of success from where the operations across five
                    nations including UAE with all the Seven Emirates is being
                    regulated.
                  </p>
                </div>

               
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-lg-4 offset-lg-1">
              <div className="cs_footer_item cs_pt_20 cs_pb_20">
                <h2 className="cs_widget_title text-white cs_fs_22 cs_mb_22">
                  Quick Links
                </h2>
                <ul className="cs_menu_widget text-uppercase">
                  <li><a href="/about">Journey</a></li>
                  <li><a href="/about">History</a></li>
                  <li><a href="/csr">CSR</a></li>
                  <li><a href="/events">Events</a></li>
                  <li><a href="/career">Careers</a></li>
                  <li><a href="/initiatives">Initiatives</a></li>
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-lg-3">
              <div className="cs_footer_item cs_pt_20 cs_pb_20">
                <div className="cs_newsletter cs_style_1">
                  <h2 className="cs_newsletter_title text-white cs_fs_22 cs_mb_9">
                    Newsletter
                  </h2>
                  <p className="cs_newsletter_subtitle cs_mb_26">
                    Stay updated with UGI’s latest initiatives and insights.
                  </p>

                  <form className="cs_newsletter_form position-relative">
                    <input
                      type="email"
                      className="cs_newsletter_input text-white cs_fs_14 cs_rounded_5 border-0 w-100 cs_pt_10"
                      placeholder="Enter your mail"
                    />
                    <button
                      type="submit"
                      className="cs_newsletter_btn cs_fs_14 cs_rounded_5 bg-accent position-absolute text-uppercase"
                    >
                      <span>Go</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="cs_copyright text-center cs_pt_36 cs_pb_36">
        <div className="container">
          <p className="m-0">
            © {new Date().getFullYear()} UGI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
