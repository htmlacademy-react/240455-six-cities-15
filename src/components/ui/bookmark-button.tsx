type BookmarkButtonProps = {
  isFavorite: boolean;
  offerClass?: boolean;
  width: number;
  height: number;
}

export default function BookmarkButton({isFavorite, offerClass, width, height}: BookmarkButtonProps): JSX.Element {
  const className = offerClass ? 'offer' : 'place-card';
  const favorite = isFavorite ? ` ${className}__bookmark-button--active` : '';

  return (
    <button className={`${className}__bookmark-button${favorite} button`} type="button">
      <svg className={`${className}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>);
}
