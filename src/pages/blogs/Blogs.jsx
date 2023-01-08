import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BlogCard from '../../components/blog/BlogCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fechBusiness } from '../../rtk/slices/business-slice';
import { fechEntertainment } from '../../rtk/slices/entertainment-slice';
import { fechHealth } from '../../rtk/slices/health-slice';
import { fechScience } from '../../rtk/slices/science-slice';
import { fechSports } from '../../rtk/slices/sports-slice';
import { fechTechnology } from '../../rtk/slices/technology-slice';


function Blogs() {

    const business = useSelector((state) => state.business);
    const entertainment = useSelector((state) => state.entertainment);
    const health = useSelector((state) => state.health);
    const science = useSelector((state) => state.science);
    const sports = useSelector((state) => state.sports);
    const technology = useSelector((state) => state.technology);

    const dispatch = useDispatch();

    useEffect (()=> {
        dispatch(fechBusiness());
        dispatch(fechEntertainment());
        dispatch(fechHealth());
        dispatch(fechScience());
        dispatch(fechSports());
        dispatch(fechTechnology());

    },[])
    
    return (
        <Tabs defaultActiveKey="business" id="fill-tab-example" className="mb-3 mt-3" fill>
            <Tab eventKey="business" title="Business">
                <BlogCard items={business}/>
            </Tab>
            <Tab eventKey="entertainment" title="Entertainment">
                <BlogCard items={entertainment}/>
            </Tab>
            <Tab eventKey="health" title="Health">
                <BlogCard items={health}/>
            </Tab>
            <Tab eventKey="science" title="Science" >
                <BlogCard items={science}/>
            </Tab>
            <Tab eventKey="sports" title="Sports" >
                <BlogCard items={sports}/>
            </Tab>
            <Tab eventKey="technology" title="Technology" >
                <BlogCard items={technology}/>
            </Tab>
        </Tabs>
    );
}

export default Blogs