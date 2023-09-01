import React from "react";
import styles from "../styles/FilmDiary.module.scss";

const FilmDiary = ({ filmList, font }) => {
  const FilmEntry = ({ title, poster, watchDate }) => {
    return (
      <div className="d-flex flex-column col-6 col-md-3 text-center">
        <img
          className="rounded"
          src={poster}
          alt={`poster for ${title}`}
          loading="lazy"
        />
        <div className="mt-4">
          <p className={styles.filmTitle}>{title}</p>
          <p className={`${styles.filmDate} ${font.className}`}>{watchDate}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="recent" className={styles.filmsSection}>
      <h3 className={styles.filmsHeader}>WHAT I’VE BEEN WATCHING...</h3>
      { filmList?.length > 0 ?
        <>
          <div className="mt-5 row col-8 col-md-7 gx-5">
            {filmList?.map((entry, index) => {
              return (
                <FilmEntry
                  key={index}
                  title={entry.film.title.toUpperCase()}
                  poster={entry.film.image.medium}
                  watchDate={new Date(entry.date.watched).toDateString()}
                />
              );
            })}
          </div>
        </>
        :
        <p className={`${font.className} fs-5 mt-3 text-center`}>
          film list could not be displayed 😔
          <br/>
          follow me on{" "}
          <a
            href="https://letterboxd.com/jesszhu/"
            rel="noreferrer"
            target="_blank"
            className={styles.link}
          >
            letterboxd
          </a>
          {" "} instead!
        </p>


      }
      
    </section>
  );
};

export default FilmDiary;
