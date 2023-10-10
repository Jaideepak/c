import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "./widgets/Overview";
import GlobalStatistics from "./widgets/GlobalStatistics";

import Contact from "./widgets/Contact";
import MedicineDelivery from "./widgets/MedicineDelivery";
import LMSBotAvatar from "./LMSBotAvatar";

const config = {
  lang: "no",
  botName: "NewsBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "white"
    },
    chatButton: {
      backgroundColor: "white"
    }
  },
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm  newsbot and I'm here to provide you with resources that you need`
    ),
    createChatBotMessage(
      "Here's a quick overview of what I can help you with.You can also type in.",
      {
        withAvatar: false,
        delay: 400,
        widget: "overview"
      }
    ),
    createChatBotMessage(`You can ask me about Today's Headlines`)
  ],
  state: {},
  customComponents: { botAvatar: (props) => <LMSBotAvatar {...props} /> },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "globalStatistics",
      widgetFunc: (props) => <GlobalStatistics />
    },

    {
      widgetName: "emergencyContact",
      widgetFunc: (props) => <Contact />
    },
    {
      widgetName: "medicineDelivery",
      widgetFunc: (props) => <MedicineDelivery />
    }
  ]
};

export default config;
