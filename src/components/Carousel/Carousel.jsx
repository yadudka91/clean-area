import classes from "./Carousel.module.css";

const Carousel = (props) => {
  return (
    <div className={classes.mainCard}>
      <div className={classes.divTitle}>
        Наша команда та результати:
        <div className={classes.carousel} id="carousel">
          {props.state.carouselCard.map((el, index) => (
            <div
              className={
                index == props.state.currentIndex
                  ? classes.carouselCardActive
                  : classes.carouselCard
              }
            >
              <div
                className={classes.carouselArrowLeft}
                onClick={() => {
                  props.sliderLeft(
                    props.state.currentIndex,
                    props.state.carouselCard
                  );
                }}
              >
                &lsaquo;
              </div>
              <img
                className={classes.Imgcarousel}
                src={el.carouselImg}
                alt="..."
              />
              <div
                className={classes.carouselArrowRight}
                onClick={() => {
                  props.sliderRight(
                    props.state.currentIndex,
                    props.state.carouselCard
                  );
                }}
              >
                &rsaquo;
              </div>
              <div className={classes.carouselPagination}>
                {props.state.carouselCard.map((el, index) => {
                  return (
                    <div
                      className={
                        index == props.state.currentIndex
                          ? classes.paginationDot && classes.paginationDotActiv
                          : classes.paginationDot
                      }
                      onClick={() => {
                        props.setCurrentIndex(index);
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={classes.divTitle}>
        Відгуки клієнтів:
        {/* <div className={classes.reviewsTitle}>
          Клінінгова компанія
          <span className={classes.cleanArea}> Clean Area </span>виконала понад
          2000 замовлень
          <div className={classes.reviewsDiv}>
            {props.state.reviews.map((el) => (
              <div className={classes.reviewsBlock}>
                <img className={classes.reviewsIcon} src={el.icon} alt="..." />
                <div className={classes.reviewsText}>{el.title}</div>
              </div>
            ))}
          </div>
        </div> */}
        <div className={classes.reviewsBlokImg}>
          {props.state.imgReviews.map((el) => (
            <img src={el.imgReviews} alt="..." />
          ))}
        </div>
        <div className={classes.reviewsTitle}>
          Залишити свій відгук у
          <a
            href="viber://chat?number=%2B380991992162"
            className={classes.cleanArea}
          >
            Viber
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
