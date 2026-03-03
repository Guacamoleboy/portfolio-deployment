import GithubGraph from "../util/github/GithubGraph";

export default function GithubSection() {

  return (
    <section id="content-github" className="content-section-github">

      {/* Visual frame around the section */}
      <div className="github-section-frame-wrapper">

        {/* Top */}
        <div className="github-section-top">

          {/* Graph Header */}
          <p className="github-graph-header">Contributions past 12 months</p>
          <GithubGraph username="Guacamoleboy" />

        </div> {/* Top end */}
       

        {/* Bottom */}
        <div className="github-section-bottom">

          {/* Left card */}
          <div className="github-bottom-card github-bottom-meta-card">
            {/* Avatar */}
            <img src="/images/guacamoleboy/guac.png" className="github-avatar"/>

            {/* Name + handle */}
            <div className="github-meta-info">
              <p className="github-username">Guacamoleboy</p>
              <p className="github-handle">Guacamoleboy • he/him</p>
              <p className="github-alias">Guac</p>
            </div>

            {/* Socials */}
            <div className="github-bottom-socials">
              <p><i className="fa fa-users"></i> 1 follower</p>
              <p><i className="fa fa-user-plus"></i> 0 following</p>
            </div>

            {/* Mail */}
            <p className="github-mail"><i className="fa fa-envelope"></i>cph-jl325@stud.ek.dk</p>
          </div>

          {/*  Bottom - Right */}
          <div className="github-section-right-stats">

            {/* 2 */}
            <div className="github-bottom-card">
              <i className="fa fa-folder-open github-card-icon"/>
              <p className="github-card-title">Total Repositories</p>
              <p className="github-card-value">41</p>
            </div>

            {/* 3 */}
            <div className="github-bottom-card">
              <i className="fa fa-star github-card-icon"/>
              <p className="github-card-title">Stars</p>
              <p className="github-card-value">3</p>
            </div>

          </div> 
          
        </div> {/* Bottom end */}

      </div> {/* Frame end */}
    
    </section>
  );
}