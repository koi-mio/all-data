import React from "react";

export default function Cards({ role, username, pr, img }) {
  console.log(username, pr, role , img);

  return (
    <div>
      <figure className="p-8 md:flex bg-slate-100 rounded-xl md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none"
          src={img}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
          <blockquote>
            <p className="text-lg font-medium">{pr}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">{role}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
