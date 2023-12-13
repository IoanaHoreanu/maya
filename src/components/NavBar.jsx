function NavBar({ onPreviousClick, onNextClick, hasPrevious, hasNext }) {
  return (
    <div>
      {hasPrevious && <button onClick={onPreviousClick}>Précédent</button>}
      {hasNext && <button onClick={onNextClick}>Suivant</button>}
    </div>
  );
}

export default NavBar;
