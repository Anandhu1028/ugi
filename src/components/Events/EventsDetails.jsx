import { useEffect } from "react";

const EventsDetails = () => {
  useEffect(() => {
    // Handle background-filled images (data-src → background-image)
    const bgElements = document.querySelectorAll("[data-src]");
    bgElements.forEach(el => {
      el.style.backgroundImage = `url(${el.getAttribute("data-src")})`;
    });
  }, []);

  return (
    <section className="cs_pt_140 cs_pt_lg_80 cs_pb_140 cs_pb_lg_80">
      <div className="container">
        <div className="row">
          {/* ================= MAIN CONTENT ================= */}
          <div className="col-lg-8">
            <div className="cs_post cs_style_1 bg-white shadow-sm cs_mb_30">
              <img
                src="/assets/img/post-details-1.jpeg"
                alt="Event Details"
              />

              <div className="cs_pl_40 cs_pr_40 cs_pt_40 cs_pb_40 cs_pl_lg_25 cs_pr_lg_25 cs_pt_lg_25 cs_pb_lg_25">
                <ul className="cs_post_meta d-flex flex-wrap cs_fs_12 p-0 cs_mb_20">
                  <li>
                    <span>
                      <i className="fa-solid fa-user"></i> By{" "}
                    </span>
                    <a href="/">admin</a>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-comment-dots"></i>
                    </span>
                    <a href="/">3 comments</a>
                  </li>
                </ul>

                <h2 className="cs_post_title cs_lh_base cs_fs_26 cs_fs_lg_18 cs_mb_20">
                  What services does your business provide?
                </h2>

                <div className="cs_post_subtitle">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in
                  some form, by injected humour, or randomised words which
                  don't look even slightly believable. If you are going to
                  use a passage of Lorem Ipsum, you need to be sure there
                  isn't anything embarrassing hidden in the middle of text.
                  <br />
                  <br />
                  Suspendisse ultricies vestibulum vehicula. Proin laoreet
                  porttitor lacus. Duis auctor vel ex eu elementum. Fusce
                  eu volutpat felis. Proin sed eros tincidunt, sagittis
                  sapien eu, porta diam.
                </div>
              </div>
            </div>

            {/* ================= TAGS & SOCIAL ================= */}
            <div className="d-flex justify-content-between align-items-center bg-gray cs_pt_25 cs_pb_25 cs_pl_40 cs_pr_40 cs_pl_lg_25 cs_pr_lg_25 flex-wrap cs_row_gap_15 cs_column_gap_15 cs_mb_40">
              <div className="cs_post_details-meta-tag">
                <h4 className="cs_sidebar_widget_title">Tags</h4>
                <div className="tagcloud">
                  <a href="/" className="tag-cloud-link">Social Marketing</a>
                  <a href="/" className="tag-cloud-link">Marketing</a>
                  <a href="/" className="tag-cloud-link">Digital Market</a>
                </div>
              </div>

              <div className="cs_social_btns cs_color_2 d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5">
                <a href="/" className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 rounded-circle">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="/" className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 rounded-circle">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="/" className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 rounded-circle">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="/" className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 rounded-circle">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </div>
            </div>

            {/* ================= COMMENTS ================= */}
            <h2 className="cs_fs_26 cs_mb_40">2 Comments</h2>

            <ol className="comment-list cs_pb_96 cs_pl_0">
              <li className="comment">
                <div className="comment-body">
                  <div className="comment-author vcard">
                    <img
                      className="avatar"
                      src="/assets/img/avatar_5.png"
                      alt="Kristin Watson"
                    />
                    <a href="/" className="url">Kristin Watson</a>
                  </div>
                  <div className="reply">
                    <a href="/" className="comment-reply-link">Reply</a>
                  </div>
                  <p>
                    Mauris non dignissim purus, ac commodo diam. Donec sit
                    amet lacinia nulla.
                  </p>
                </div>
              </li>

              <li className="comment">
                <div className="comment-body">
                  <div className="comment-author vcard">
                    <img
                      className="avatar"
                      src="/assets/img/avatar_6.png"
                      alt="Courtney Henry"
                    />
                    <a href="/" className="url">Courtney Henry</a>
                  </div>
                  <div className="reply">
                    <a href="/" className="comment-reply-link">Reply</a>
                  </div>
                  <p>
                    Mauris non dignissim purus, ac commodo diam. Donec sit
                    amet lacinia nulla.
                  </p>
                </div>
              </li>
            </ol>

            {/* ================= COMMENT FORM ================= */}
            <h2 className="cs_fs_26 cs_mb_40">Leave a Comment</h2>

            <form className="row">
              <div className="col-lg-6">
                <input
                  className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_35 bg-gray"
                  type="text"
                  placeholder="Your Name"
                />
              </div>

              <div className="col-lg-6">
                <input
                  className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_35 bg-gray"
                  type="email"
                  placeholder="Your Email"
                />
              </div>

              <div className="col-lg-12">
                <textarea
                  className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_40 bg-gray"
                  placeholder="Message here ..."
                  rows="7"
                />
              </div>

              <div className="col-lg-12">
                <button className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden">
                  <span>Submit Comment</span>
                </button>
              </div>
            </form>
          </div>

          {/* ================= SIDEBAR ================= */}
          <div className="col-lg-4">
            <div className="cs_sidebar cs_mt_lg_80">
              {/* Search */}
              <div className="cs_sidebar_item widget_search">
                <form className="cs_sidebar_search">
                  <input type="text" placeholder="Search..." />
                  <button className="cs_sidebar_search_btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="cs_sidebar_item widget_categories">
                <h4 className="cs_sidebar_widget_title">Categories</h4>
                <ul>
                  <li><a href="/">Corporate</a></li>
                  <li><a href="/">Digital Solutions</a></li>
                  <li><a href="/">Business & Finance</a></li>
                  <li><a href="/">Web Designer</a></li>
                  <li><a href="/">Social Marketing</a></li>
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="cs_sidebar_item">
                <h4 className="cs_sidebar_widget_title">Recent Posts</h4>
                <ul className="cs_recent_posts">
                  {[1, 2, 3].map(i => (
                    <li key={i}>
                      <div className="cs_recent_post">
                        <a href="/" className="cs_recent_post-thumb">
                          <div
                            className="h-100 w-100 background-filled"
                            data-src={`/assets/img/recent-post-${i}.jpeg`}
                          />
                        </a>
                        <div className="cs_recent_post-info">
                          <div className="cs_recent_post-date">
                            <i className="fa-regular fa-calendar-days"></i> 15 Mar, 2023
                          </div>
                          <h3 className="cs_recent_post-title">
                            <a href="/">What services does your business provide?</a>
                          </h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="cs_sidebar_item widget_tag_cloud">
                <h4 className="cs_sidebar_widget_title">Tags</h4>
                <div className="tagcloud">
                  <a href="/" className="tag-cloud-link">Social Marketing</a>
                  <a href="/" className="tag-cloud-link">Marketing</a>
                  <a href="/" className="tag-cloud-link">Digital Market</a>
                  <a href="/" className="tag-cloud-link">Development</a>
                  <a href="/" className="tag-cloud-link">Web Design</a>
                  <a href="/" className="tag-cloud-link">Design</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsDetails;
