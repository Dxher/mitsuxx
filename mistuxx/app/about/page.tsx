import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>The Artist</span>
          <h1 className={styles.title}>Mistuxx - Anna</h1>
          <p className={styles.subtitle}>Portrait painter</p>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.imagePlaceholder}>
            <img
              src={"/portrait.avif"}
              alt={"Anna Headshot"}
              className={styles.paintingImage}
              draggable={false}
            />
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine}></div>
        </div>
      </section>

      {/* Biography Section */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>
            <span>01</span>
            <span className={styles.labelLine}></span>
            <span>Biography</span>
          </div>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>A Life Devoted to Art</h2>
            <div className={styles.textColumns}>
              <p>
                The journey began in the quiet studios of Portland, Oregon, where light filters 
                through rain-kissed windows and inspiration lives in every shadow. From the earliest 
                memories of watching paint swirl in water glasses to the disciplined practice of 
                formal training, the path to becoming an artist was never a choice—it was an inevitability.
              </p>
              <p>
                After completing studies at the Pacific Northwest College of Art, years were spent 
                traveling through Europe, absorbing the old masters while developing a distinctly 
                contemporary voice. The influence of the Dutch Golden Age mingles with Abstract 
                Expressionism, creating works that feel both timeless and urgently present.
              </p>
              <p>
                Today, the studio practice involves long hours of observation before brush ever 
                touches canvas. Each painting is a meditation—a slow, deliberate conversation 
                between intention and intuition. The work demands patience from both creator and 
                viewer, rewarding those who take time to look deeply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>
            <span>02</span>
            <span className={styles.labelLine}></span>
            <span>Philosophy</span>
          </div>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>On Art & Practice</h2>
            <blockquote className={styles.quote}>
              "Every painting is an attempt to capture what cannot be spoken—the weight of 
              a moment, the texture of memory, the color of silence."
            </blockquote>
            <div className={styles.philosophyGrid}>
              <div className={styles.philosophyItem}>
                <h3>Light</h3>
                <p>
                  The study of how light transforms everything it touches. Not merely illumination, 
                  but light as substance, as character, as the invisible force that gives form to the formless.
                </p>
              </div>
              <div className={styles.philosophyItem}>
                <h3>Time</h3>
                <p>
                  Paintings that resist the immediate, demanding instead the slow accumulation 
                  of looking. In an age of instant imagery, the work insists on duration.
                </p>
              </div>
              <div className={styles.philosophyItem}>
                <h3>Material</h3>
                <p>
                  Deep respect for the physical reality of paint—its weight, its luminosity, 
                  its capacity to hold light and release it slowly, over years, over centuries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>
            <span>03</span>
            <span className={styles.labelLine}></span>
            <span>Process</span>
          </div>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>The Making</h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>I</div>
                <div className={styles.stepContent}>
                  <h3>Observation</h3>
                  <p>
                    Before beginning any work, weeks are spent in observation. Sketching, 
                    photographing, simply looking. The subject must be understood in all 
                    conditions of light, in all its moods, before it can be translated to canvas.
                  </p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>II</div>
                <div className={styles.stepContent}>
                  <h3>Preparation</h3>
                  <p>
                    Each canvas is prepared by hand using traditional methods. The ground is 
                    built in multiple layers, sanded smooth, creating a surface that will accept 
                    paint and hold it for generations. Quality materials are non-negotiable.
                  </p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>III</div>
                <div className={styles.stepContent}>
                  <h3>Execution</h3>
                  <p>
                    The painting process itself can span weeks to months. Oil paint is applied 
                    in thin, translucent layers, each allowed to dry before the next is added. 
                    This glazing technique creates depth and luminosity impossible to achieve otherwise.
                  </p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>IV</div>
                <div className={styles.stepContent}>
                  <h3>Completion</h3>
                  <p>
                    A painting is finished only when it begins to speak back. This recognition 
                    cannot be forced or scheduled—it arrives in its own time, often unexpectedly, 
                    sometimes after years of returning to the same canvas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>
            <span>04</span>
            <span className={styles.labelLine}></span>
            <span>Recognition</span>
          </div>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Selected Exhibitions</h2>
            <div className={styles.exhibitionList}>
              <div className={styles.exhibition}>
                <span className={styles.exhibitionYear}>2024</span>
                <div className={styles.exhibitionDetails}>
                  <h3>Luminous Depths</h3>
                  <p>Whitworth Gallery, Portland — Solo Exhibition</p>
                </div>
              </div>
              <div className={styles.exhibition}>
                <span className={styles.exhibitionYear}>2023</span>
                <div className={styles.exhibitionDetails}>
                  <h3>New Voices in Contemporary Painting</h3>
                  <p>Seattle Art Museum — Group Exhibition</p>
                </div>
              </div>
              <div className={styles.exhibition}>
                <span className={styles.exhibitionYear}>2023</span>
                <div className={styles.exhibitionDetails}>
                  <h3>The Long Look</h3>
                  <p>Helm Gallery, San Francisco — Two-Person Show</p>
                </div>
              </div>
              <div className={styles.exhibition}>
                <span className={styles.exhibitionYear}>2022</span>
                <div className={styles.exhibitionDetails}>
                  <h3>Emerging Artists Biennial</h3>
                  <p>Contemporary Art Center, Los Angeles</p>
                </div>
              </div>
              <div className={styles.exhibition}>
                <span className={styles.exhibitionYear}>2021</span>
                <div className={styles.exhibitionDetails}>
                  <h3>First Light</h3>
                  <p>Morrison Gallery, Portland — Debut Solo Exhibition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>
            <span>05</span>
            <span className={styles.labelLine}></span>
            <span>Studio</span>
          </div>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Where the Work Happens</h2>
            <div className={styles.studioInfo}>
              <div className={styles.studioText}>
                <p>
                  The studio occupies a converted warehouse space in Portland's Pearl District. 
                  North-facing windows provide consistent, even light throughout the day—the 
                  same quality of light favored by painters for centuries.
                </p>
                <p>
                  Visitors by appointment are welcome. The studio is open for collectors, 
                  curators, and fellow artists who wish to see works in progress and discuss 
                  potential commissions.
                </p>
              </div>
              <div className={styles.studioDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Location</span>
                  <span className={styles.detailValue}>Portland, Oregon</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Visits</span>
                  <span className={styles.detailValue}>By Appointment</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Commissions</span>
                  <span className={styles.detailValue}>Currently Accepting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}