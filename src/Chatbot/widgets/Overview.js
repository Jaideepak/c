import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Show global statistics",
      handler: props.actionProvider.handleGlobalStats,
      id: 1
    },
    {
      name: "TopTrendingNews",
      handler: props.actionProvider.handleTopTrendingNews,
      id: 2
    },
    {
      name: "Emergency contact",
      handler: props.actionProvider.handleContact,
      id: 3
    },
    {
      name: "Get Vaccinated",
      handler: props.actionProvider.handleMedicine,
      id: 4
    }
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
