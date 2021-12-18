import { Link } from "react-router-dom";

function ThumbnailLink(props) {
  return (
    <Link to={`../${props.pageName}`}>
      <img
        src={props.lowResThumb}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </Link>
  );
}

export default ThumbnailLink;
