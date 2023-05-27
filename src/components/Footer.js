import React from "react";

export default function Footer() {
  return (
    <div className=" w-full flex justify-center">
      <footer className=" mx-auto w-fit p-2 m-2 self-center justify-center items-center font-mono text-center fixed bottom-0 bg-gray-300 opacity-90 rounded-xl h-10">
        Made with&nbsp;<strong style={{ color: "red" }}>&hearts;</strong>
        &nbsp;by&nbsp;
        <strong>
          <a
            style={{ color: "red" }}
            href="https://www.instagram.com/antonio_mattar/"
          >
            {" "}
            <u>@antonio_mattar</u>
          </a>
        </strong>
      </footer>
    </div>
  );
}
