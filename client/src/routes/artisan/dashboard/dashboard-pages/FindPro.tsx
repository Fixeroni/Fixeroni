import { createFileRoute } from '@tanstack/react-router'
import SideBarNav from "../DashBoardComponent/SideBarNav"
import DashBoardMap from '../DashBoardComponent/DashBoardMap';
import DashboarFeatures  from "../DashBoardComponent/DashboarFeatures"
import DashboardPage from './DashboardPage';
import FindProHeader from '../dashboard-pages/FindProHeader';
import StarRating from '../DashBoardComponent/StarRating';
export const Route = createFileRoute('/artisan/dashboard/dashboard-pages/FindPro')({
  component: FindPro,
})

 function FindPro() {
  return <div>
    <div className='grid grid-cols-7 '>
      <div className='col-span-1'><SideBarNav/></div>
      <div className='col-span-4'>
        {/* <DashboardPage/> */}
        <FindProHeader/>
           <DashboarFeatures  Margintop={""} image={"/images/assets/feature_image_A.png"}  title={"Wade Warren"} />
            <DashboarFeatures Margintop={"mt-4"} image={"/images/assets/feature_image_B.png"}  title={"Jane Cooper"} />
              <DashboarFeatures Margintop={"mt-4"} image={"/images/assets/feature_image_C.png"}  title={"Dianne Russell"} />
        
        
      </div>
      <div className='col-span-2'><DashBoardMap/></div>
    </div>
  </div>
}


export default FindPro;