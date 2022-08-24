import './AreaList.css';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { listAreas } from '../../actions/mealActions';


//'www.themealdb.com/api/json/v1/1'
//
const AreaList=()=>{
    const dispatch=useDispatch();
    const areaList=useSelector((state)=>state.areaList);    
    const {areas}=areaList;
    
    const navigate=useNavigate();

    useEffect(()=>{
        dispatch(listAreas());
    }, [dispatch]);

    const sendToAreaPage=(e, areaName)=>{
        e.preventDefault();
        //navigate(`/product/${id}`);
        navigate(`/area/${areaName}`)
    }

    const areaArr=areas.filter(a=>{
        return a.strArea !== 'Unknown';
    })
    const limit=Math.floor(areaArr.length / 2);
    const firstArr=areaArr.slice(0 , limit);
    const secondArr=areaArr.slice(limit, areaArr.length);

    const firstBoxAreas=firstArr.map((area)=>{
        return(
            <div key={area.strArea} className="box" onClick={(e)=>sendToAreaPage(e, area.strArea)}>
                <p>{area.strArea}</p>                               
            </div>
        )
    })
    const secondBoxAreas=secondArr.map((area)=>{
        return(
            <div key={area.strArea} className="box" onClick={(e)=>sendToAreaPage(e, area.strArea)}>
                <p>{area.strArea}</p>                               
            </div>
        )
    })
    return(
        <section className="area-section">
            <h2>Select By Area</h2>
            <div className="area-container">
                <div className="area-box">
                    <img src="./images/area-1.jpg"  className="area-image" alt="areaimage" />
                    <div class="content-box">
                        {firstBoxAreas}
                    </div>
                </div>
                <div className="area-box">
                    <img src="./images/area-4.jpg" className='area-image' alt="areaimage" />
                    <div className="content-box">
                        {secondBoxAreas}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AreaList;