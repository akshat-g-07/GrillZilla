import ResponsiveHeader from "./ResponsiveHeader";
import ChefApp from "./ChefApp";

const ChefsPage = () => {
  return (
    <>
      <ResponsiveHeader />
      <div className="menuholder">
        <img
          className="menu_bg responsive"
          src="images/menu_bg.png"
          alt=""
        ></img>
        <img
          className="inner_bg responsive"
          src="images/inner-bg.png"
          alt=""
        ></img>
        <img
          className="background_img responsive"
          src="images/b1.jfif"
          alt=""
        ></img>
        <img
          className="plate_bg responsive"
          src="images/plate_bg.png"
          alt=""
        ></img>
      </div>
      <ChefApp />
    </>
  );
};

export default ChefsPage;
