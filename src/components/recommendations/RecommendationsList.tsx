import {Card, Col, Container, Row} from "react-bootstrap";
import React from "react";


const FAKE_Q_LIST =
[
    {
        "id": 10,
        "by": "test@mail.com",
        "updated_at": "2021-12-10",
        "send_now": false,
        "time_sent": null,
        "cv": {
            "url": "/home/petarangelov/Desktop/dev/rails/ReCommendMe/storage/0k/vj/0kvjtvr6k0xh1mqozl2yxqez4uej",
            "name": "file.pdf",
            "size_b": 8987
        }
    },
    {
        "id": 11,
        "by": "test@mail.com",
        "updated_at": "2021-12-10",
        "send_now": true,
        "time_sent": null,
        "cv": {
            "url": "/home/petarangelov/Desktop/dev/rails/ReCommendMe/storage/jr/nn/jrnnmbmt4qvoy7iwmi6ig5qr629r",
            "name": "file.pdf",
            "size_b": 8987
        }
    },
    {
        "id": 14,
        "by": "test@mail.com",
        "updated_at": "2021-12-10",
        "send_now": true,
        "time_sent": null,
        "cv": {
            "url": "/home/petarangelov/Desktop/dev/rails/ReCommendMe/storage/hp/vm/hpvm0jrlrfznpjsn8m83lyj9mcmt",
            "name": "file.pdf",
            "size_b": 8987
        }
    },
    {
        "id": 15,
        "by": "test@mail.com",
        "updated_at": "2021-12-10",
        "send_now": true,
        "time_sent": null,
        "cv": {
            "url": "/home/petarangelov/Desktop/dev/rails/ReCommendMe/storage/8a/o9/8ao9h8gbp3jfs9bx2hiku3h6hq8l",
            "name": "file.pdf",
            "size_b": 8987
        }
    },
    {
        "id": 16,
        "by": "test@mail.com",
        "updated_at": "2021-12-10",
        "send_now": true,
        "time_sent": null,
        "cv": {
            "url": "/home/petarangelov/Desktop/dev/rails/ReCommendMe/storage/77/di/77dimppywe6c96pam6fj1ta47nbs",
            "name": "file.pdf",
            "size_b": 8987
        }
    },
    {
        "id": 18,
        "by": "test@mail.com",
        "updated_at": "2021-12-10",
        "send_now": true,
        "time_sent": null,
        "cv": {
            "url": "/home/petarangelov/Desktop/dev/rails/ReCommendMe/storage/h2/av/h2av9u709woaxfnvfis8nbg7zxwr",
            "name": "file.pdf",
            "size_b": 8987
        }
    },
    {
        "id": 19,
        "by": "test@mail.com",
        "updated_at": "2021-12-10",
        "send_now": true,
        "time_sent": null,
        "cv": {
            "url": "/home/petarangelov/Desktop/dev/rails/ReCommendMe/storage/pv/1w/pv1w65t8s79vmdxgbfdgdy0nh4wx",
            "name": "file.pdf",
            "size_b": 8987
        }
    },
    {
        "id": 20,
        "by": "test@mail.com",
        "updated_at": "2021-12-10",
        "send_now": true,
        "time_sent": null,
        "cv": {
            "url": "/home/petarangelov/Desktop/dev/rails/ReCommendMe/storage/4r/4z/4r4zpf32pajwm7z64arvlc4fndav",
            "name": "file.pdf",
            "size_b": 8987
        }
    },
    {
        "id": 21,
        "by": "test@mail.com",
        "updated_at": "2021-12-10",
        "send_now": true,
        "time_sent": null,
        "cv": {
            "url": "/home/petarangelov/Desktop/dev/rails/ReCommendMe/storage/3x/yy/3xyyp5ykt29ui1msqp0xj34694g1",
            "name": "file.pdf",
            "size_b": 8987
        }
    },
    {
        "id": 22,
        "by": "test@mail.com",
        "updated_at": "2021-12-10",
        "send_now": true,
        "time_sent": "2021-12-10",
        "cv": {
            "url": "/home/petarangelov/Desktop/dev/rails/ReCommendMe/storage/mr/qf/mrqfm7dudevd7pwofqjwr1h5lvvo",
            "name": "file.pdf",
            "size_b": 8987
        }
    },
    {
        "id": 23,
        "by": "test@mail.com",
        "updated_at": "2021-12-10",
        "send_now": true,
        "time_sent": "2021-12-10",
        "cv": {
            "url": "/home/petarangelov/Desktop/dev/rails/ReCommendMe/storage/i9/kc/i9kcddxea2r3jrix955o0zhiamqu",
            "name": "file.pdf",
            "size_b": 8987
        }
    }
]

interface IRecommendationProps
{
    by: string,
    time_sent?: null | string,
    cv: IRecommendationCVProps,
    id: number,
    updated_at: string,
    send_now: boolean
}

interface IRecommendationCVProps {
    name: string;
    size_b: number;
    url: string
}

function RecommendationCard(recommendation :IRecommendationProps) {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>File: {recommendation.cv.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">By: {recommendation.by}</Card.Subtitle>
                    {/*TODO: ADD A 'TO' PROPERTY AFTER READING! */}
                    <Card.Subtitle className="mb-2 text-muted">To: {recommendation.by}</Card.Subtitle>
                    <Card.Text>
                        This recommendation
                        {
                            recommendation.time_sent === null ?
                                " hasn't been sent yet" :
                                ` has been sent on ${recommendation.time_sent}`
                        }.
                    </Card.Text>
                    <Card.Link href={`${recommendation.cv.url}`}>File url</Card.Link> <br/>
                    {!recommendation.time_sent && <button className='btn btn-success'>Send now!</button>}
                </Card.Body>
            </Card>
        </Container>
    )
}

export const RecommendationsList = () => {
  return(
      <>
          <h3>Printing recommendations:</h3>
          {FAKE_Q_LIST.map((recommendation, id: number) => {
              return <RecommendationCard {...recommendation} key={id}/>
          })}
      </>
  )
}
