import * as React from "react"

interface PaginationExampleProps {
  pages: number;
  default?: number;
}

export const PaginationExample: React.FC<PaginationExampleProps> = (props) => {
  const pages = Array.from(Array(props.pages).keys())
  const [current, setCurrent] = React.useState<number>(props.default || 0);

  const isPrevDisabled = current === 0;
  const isNextDisabled = current === pages.length - 1;
  
  const onPrev = () => {
    if(current > 0) setCurrent(current - 1)
  }
  const onNext = () => {
    if(current < pages.length - 1) setCurrent(current + 1)
  }

  let pagesToShow = pages;
  let showTopTrimmer = false;
  let showBottomTrimmer = false;

  const lastIndex = pages.length - 1;
  
  if(pages.length > 9) {
    if(current < 5 ) {
      pagesToShow = pagesToShow.slice(0, 7);
      showTopTrimmer = true;
    } else if(current > lastIndex - 5 ) {
      pagesToShow = pagesToShow.slice(lastIndex - 5);
      showBottomTrimmer = true;
    } else {
      pagesToShow = pagesToShow.slice(current - 2, current + 3);
      showBottomTrimmer = true;
      showTopTrimmer = true;
    }
  }
    
  return <nav aria-label="Ejemplo de paginación">
  <ul className="pagination">
    <PaginationItem disabled={isPrevDisabled} onClick={() => onPrev()}>
      <span className="page-previous-icon" aria-hidden="true" /> Anterior
    </PaginationItem>

    {showBottomTrimmer && <>
      <PaginationNumber index={0} current={current} onClick={() => setCurrent(0)} />
      <PaginationItem disabled={true} children={"..."} />
    </>}

    {pagesToShow.map(i => <PaginationNumber index={i} key={i} current={current} onClick={() => setCurrent(i)} />)}

    {showTopTrimmer && <>
      <PaginationItem disabled={true} children={"..."} />
      <PaginationNumber index={lastIndex} current={current} onClick={() => setCurrent(lastIndex)} />
    </>}
    
    <PaginationItem disabled={isNextDisabled} onClick={() => onNext()}>
      Siguiente <span className="page-next-icon" aria-hidden="true" />
    </PaginationItem>
  </ul>
</nav>;
}

interface PaginationItemProps {
  onClick?: () => void;
  className?: string;
  active?: boolean;
  disabled?: boolean;
}

export const PaginationItem: React.FC<PaginationItemProps> = (props) => {
  const onClick: React.MouseEventHandler = (event) => {
    event.preventDefault();
    props.onClick();
  }

  if (props.disabled) {
    return (
      <li className="page-item disabled">
        <span className="page-link">
          {props.children}
        </span>
      </li>
    );
  }
  
  return (
    <li className={`page-item ${props.active ? "active" : ""}`}>
      <a className="page-link" href="#" onClick={onClick}>
        {props.children}
      </a>
    </li>
  );
}

interface PaginationNumberProps {
  index: number;
  current: number;
  onClick: () => void;
}

export const PaginationNumber: React.FC<PaginationNumberProps> = (props) => {
  const {index, current, onClick} = props;
  
  return (
    <PaginationItem 
      children={index + 1} 
      active={index === current} 
      onClick={onClick} />
  );
}
