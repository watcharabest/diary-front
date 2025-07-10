import { useState } from "react";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

export function Welcome() {

  const Jan: MediaItem[] = [
    {
      type: "image",
      src: "/jan/IMG_6394.jpg",
    },
    {
      type: "image",
      src: "/jan/IMG_6395.jpg",
    },
    {
      type: "video",
      src: "/jan/IMG_6400.mp4",
    },
  ];

  const Feb: MediaItem[] = [
    {
      type: "image",
      src: "/feb/feb1.jpg",
    },
    {
      type: "image",
      src: "/feb/feb2.jpg",
    },
    {
      type: "video",
      src: "/feb/IMG_6210.mp4",
    },
  ];

  const March: MediaItem[] = [
    {
      type: "image",
      src: "/march/IMG_7301.jpg",
    },
    {
      type: "image",
      src: "/march/IMG_7309.JPG",
    },
    {
      type: "video",
      src: "/march/IMG_7311.mp4",
    },
  ];

  const April: MediaItem[] = [
    {
      type: "image",
      src: "/apr/apr1.jpg",
    },
    {
      type: "image",
      src: "/apr/apr2.jpg",
    },
    {
      type: "video",
      src: "/apr/IMG_8059.mp4",
    },
  ];

  const May: MediaItem[] = [
    {
      type: "image",
      src: "/may/IMG_9937.JPG",
    },
    {
      type: "image",
      src: "/may/IMG_9972.JPG",
    },
    {
      type: "video",
      src: "/may/IMG_8099.mp4",
    },
  ];

  const [janIndex, setJanIndex] = useState(0);
  const [febIndex, setFebIndex] = useState(0);
  const [marchIndex, setMarchIndex] = useState(0);
  const [aprilIndex, setAprilIndex] = useState(0);
  const [mayIndex, setMayIndex] = useState(0);

  const prevJan = () => {
    setJanIndex((prev) => (prev === 0 ? Jan.length - 1 : prev - 1));
  };

  const nextJan = () => {
    setJanIndex((prev) => (prev === Jan.length - 1 ? 0 : prev + 1));
  };

  const handleJanClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const width = bounds.width;
    if (x < width / 2) {
      prevJan();
    } else {
      nextJan();
    }
  };

  const prevFeb = () => {
    setFebIndex((prev) => (prev === 0 ? Feb.length - 1 : prev - 1));
  };

  const nextFeb = () => {
    setFebIndex((prev) => (prev === Feb.length - 1 ? 0 : prev + 1));
  };

  const handleFebClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const width = bounds.width;
    if (x < width / 2) {
      prevFeb();
    } else {
      nextFeb();
    }
  };

  const prevMarch = () => {
    setMarchIndex((prev) => (prev === 0 ? March.length - 1 : prev - 1));
  };

  const nextMarch = () => {
    setMarchIndex((prev) => (prev === March.length - 1 ? 0 : prev + 1));
  };

  const handleMarchClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const width = bounds.width;
    if (x < width / 2) {
      prevMarch();
    } else {
      nextMarch();
    }
  };

  const prevApril = () => {
    setAprilIndex((prev) => (prev === 0 ? April.length - 1 : prev - 1));
  };

  const nextApril = () => {
    setAprilIndex((prev) => (prev === April.length - 1 ? 0 : prev + 1));
  };

  const handleAprilClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const width = bounds.width;
    if (x < width / 2) {
      prevApril();
    } else {
      nextApril();
    }
  };

  const prevMay = () => {
    setMayIndex((prev) => (prev === 0 ? May.length - 1 : prev - 1));
  };

  const nextMay = () => {
    setMayIndex((prev) => (prev === May.length - 1 ? 0 : prev + 1));
  };

  const handleMayClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const width = bounds.width;
    if (x < width / 2) {
      prevMay();
    } else {
      nextMay();
    }
  };

  return (
    <main>
      <div className="flex justify-center mx-6 my-3 text-5xl font-bold text-gray-300">2025</div>
      <div className="line bg-gray-300"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto w-[300px] min-w-[40%] sm:w-full">

        <div className="card">
          <div className="image" onClick={handleJanClick}>
            {Jan[janIndex].type === "image" ? (
              <img
                src={Jan[janIndex].src}
                alt="White House"
              />
            ) : (
              <video src={Jan[janIndex].src} autoPlay loop muted playsInline/>
            )}
            <section className="footer-card">
              <div className="forecast">
                <div>
                  <p className="mt-5">White House ,Chonburi</p>
                </div>
              </div>
              <div className="line"></div>
              <div className="forecast">
                <div>
                  <p className="mt-1">Saturday 25 January</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="card">
          <div className="image" onClick={handleFebClick}>
            {Feb[febIndex].type === "image" ? (
              <img
                src={Feb[febIndex].src}
                alt="White House"
              />
            ) : (
              <video src={Feb[febIndex].src} autoPlay loop muted playsInline/>
            )}
            <section className="footer-card">
              <div className="forecast">
                <div>
                  <p className="mt-5"></p>
                </div>
              </div>
              <div className="line"></div>
              <div className="forecast">
                <div>
                  <p className="mt-1"></p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="card">
          <div className="image" onClick={handleMarchClick}>
            {March[marchIndex].type === "image" ? (
              <img
                src={March[marchIndex].src}
                alt="White House"
              />
            ) : (
              <video src={March[marchIndex].src} autoPlay loop muted playsInline/>
            )}
            <section className="footer-card">
              <div className="forecast">
                <div>
                  <p className="mt-5">Sai Kaew Beach ,Chonburi</p>
                </div>
              </div>
              <div className="line"></div>
              <div className="forecast">
                <div>
                  <p className="mt-1">Friday 28 March</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="card">
          <div className="image" onClick={handleAprilClick}>
            {April[aprilIndex].type === "image" ? (
              <img
                src={April[aprilIndex].src}
                alt="White House"
              />
            ) : (
              <video src={April[aprilIndex].src} autoPlay loop muted playsInline/>
            )}
            <section className="footer-card">
              <div className="forecast">
                <div>
                  <p className="mt-5"></p>
                </div>
              </div>
              <div className="line"></div>
              <div className="forecast">
                <div>
                  <p className="mt-1"></p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="card">
          <div className="image" onClick={handleMayClick}>
            {May[mayIndex].type === "image" ? (
              <img
                src={May[mayIndex].src}
                alt="Sai Kaew Beach ,Chonburi"
              />
            ) : (
              <video src={May[mayIndex].src} autoPlay loop muted playsInline/>
            )}
            <section className="footer-card">
              <div className="forecast">
                <div>
                  <p className="mt-5">Khao Chong Lom ,Nakorn Nayok</p>
                </div>
              </div>
              <div className="line"></div>
              <div className="forecast">
                <div>
                  <p className="mt-1">Saturday 31 May</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <section className="footer-card">
              <div className="forecast">
                <div>
                  <p className="mt-5"></p>
                </div>
              </div>
              <div className="line"></div>
              <div className="forecast">
                <div>
                  <p className="mt-1"></p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <section className="footer-card">
              <div className="forecast">
                <div>
                  <p className="mt-5"></p>
                </div>
              </div>
              <div className="line"></div>
              <div className="forecast">
                <div>
                  <p className="mt-1"></p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <section className="footer-card">
              <div className="forecast">
                <div>
                  <p className="mt-5"></p>
                </div>
              </div>
              <div className="line"></div>
              <div className="forecast">
                <div>
                  <p className="mt-1"></p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <section className="footer-card">
              <div className="forecast">
                <div>
                  <p className="mt-5"></p>
                </div>
              </div>
              <div className="line"></div>
              <div className="forecast">
                <div>
                  <p className="mt-1"></p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <section className="footer-card">
              <div className="forecast">
                <div>
                  <p className="mt-5"></p>
                </div>
              </div>
              <div className="line"></div>
              <div className="forecast">
                <div>
                  <p className="mt-1"></p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <section className="footer-card">
              <div className="forecast">
                <div>
                  <p className="mt-5"></p>
                </div>
              </div>
              <div className="line"></div>
              <div className="forecast">
                <div>
                  <p className="mt-1"></p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <section className="footer-card">
              <div className="forecast">
                <div>
                  <p className="mt-5"></p>
                </div>
              </div>
              <div className="line"></div>
              <div className="forecast">
                <div>
                  <p className="mt-1"></p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}