import React from "react";
// import Button from "./Button";

const EventsCarousel = () => {
  return (
    <div
      style={{
        paddingTop: "5vh",
        height: "70vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ height: "70vh", width: "50vw", backgroundColor: "black" }}>
        <div style={{ height: "45%", paddingTop: "15%", paddingLeft: "100px" }}>
          <p
            style={{
              color: "white",
              fontSize: "210%",
            }}
          >
            14-16 OCT
          </p>
        </div>
        {/* <Button 
        // border={"2px solid white"}
          link={"google.com"}
          color={"white"}
          background={"black"}
          font={""}
          text={"Click Me"}
        /> */}
        <div style={{ paddingTop: "15%", paddingLeft: "100px" }}>
          <p
            style={{
              color: "white",
              fontSize: "170%",
              fontWeight: "100",
            }}
          >
            Manipal University Jaipur
          </p>
          <br />
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "10px 40px",
              fontSize: "170%",
              fontWeight: "600",
            }}
          >
            REGISTER
          </button>
        </div>
      </div>
      <div
        style={{
          height: "70vh",
          width: "50vw",
          backgroundColor: "rgba(217, 217, 217, 1)",
        }}
      >
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "end",
            marginRight: "20%"
          }}
        >
          <p style={{
              color: "white",
              fontSize: "1100%",
              fontWeight: "800",
            }}>20</p>
        </div>
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "end",
            marginRight: "20%"
          }}
        >
          <p style={{
              fontSize: "1100%",
              fontWeight: "800",
            }}>22</p>
        </div>
        <div style={{position: "relative", top: "-70%", left: "-52.5%", fontSize: "270%", fontWeight: "800", textAlign: "center"}}><span>TM<span style={{color: "black"}}>C</span></span><br /><span>REQU<span style={{color: "black"}}>IEM</span></span></div>
      </div>
    </div>
  );
};

export default EventsCarousel;
