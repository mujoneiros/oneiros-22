import React from "react";
import Faq from "react-faq-component";
export default function Faqs(props) {
  const data = {
    title: "Frequently Asked Questions",
    rows: [
      {
        title: "Which artist will perform at Oneiros 2022?",
        content: "The leading light of Oneiros will be announced soon on our social media handles.",
      },
      {
        title: "Which students are allowed to apply?",
        content:
          "Students from all colleges across the globe are welcome to apply.",
      },
      {
        title: "What will be the location of the ongoing events?",
        content: `All participants will be informed about the time and location of the relevant events by the corresponding organizers.`,
      },
      {
        title: "Can I register for multiple events?",
        content: `Yes, you can register for as many events as you want but their timings might overlap.`,
      },
      {
        title: "What is Oneiros?",
        content: ` Oneiros is the annual cultural fest of Manipal University Jaipur.`,
      },
      {
        title: "Where will the events be conducted?",
        content: `All events will be conducted inside the University campus.`,
      },
      {
        title: "Is there any sort of transport faility available?",
        content: `No, make sure to acquire tranport before attending the fest.`,
      },
      {
        title: "How will the experience of Oneiros be?",
        content: `The experience will be integrating, enriching and fulfilling to say the least. `,
      },
      {
        title: "In which mode will the events be conducted?",
        content: `All events will be conducted in offline mode.`,
      },
      {
        title: "What options are available for having meals at Oneiros?",
        content: `There will be abundant food vendours available throughout campus during the fest.`,
      },
      {
        title: "Is there a registration fee for participating in events in Oneiros?",
        content: `Refer events tab for more information.`,
      },
    ],
  };
  const styles = {
    bgColor: "rgb(4,7,19)",
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: "white",
    arrowColor: "white",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}