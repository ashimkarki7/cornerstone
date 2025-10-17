import HomepageComponent from '@pages/HomePage/component';


const HomePageContainer = (props: any) => {

  props = { ...props };
  const getFile = () => {
    return {};
  };

  return <HomepageComponent {...props} getFile={getFile} />;
};
export default HomePageContainer;
