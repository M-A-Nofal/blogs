import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"
import './blog.css'


function BlogCard({items}) {

    return (
        <section className='blog mt-5 '>
            <Row md={2} xs={1} lg={3} className='g-3'>
                {items.filter((item) => item.urlToImage !== null).map((item) => (
                    <Col  key={item.title}>
                        <Card className='boxItems'>
                            <Card.Img className='blogImg' variant="top" src={item.urlToImage} />
                            <Card.Body className='details'>
                                <div className='tag'>
                                    <AiOutlineTags className='icon' />
                                    <Link to='/'>#{item.source.name}</Link>
                                </div>
                                <Link to={`/details/${item.title}`}>
                                    <Card.Title className='link'>{item.title.slice(0,35)}...</Card.Title>
                                </Link>
                                <Card.Text>
                                    {item.description ? item.description.slice(0,40) : "" }...
                                </Card.Text>
                                <div className='date'>
                                    <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.publishedAt}</label>
                                    <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                                    <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
}

export default BlogCard;