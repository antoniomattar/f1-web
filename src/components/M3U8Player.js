import ReactPlayer from "react-player";

export default function M3U8Player(props) {
  return (
    <>
      <div className="mx-auto w-fit rounded-xl border-8 border-solid border-red-600">
        <ReactPlayer
          url={props.link}
          playing={true}
          controls={true}
          width={270}
          height={152}
        />
      </div>
    </>
  );
}
