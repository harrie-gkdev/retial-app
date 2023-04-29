import React from 'react'
import Image from 'next/image'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LayoutAdmin from '@/admin-layout/Layout';
import { Carousel } from 'react-bootstrap';

import Link from 'next/link'

const Sales = () => {
  return (
    <>
      <LayoutAdmin>
        <div className='p-4' style={{ background: '#F8F8F8', zIndex: '1' }}>
          <Container style={{ top: '50%' }} fluid>
            <Row className='text-center'>
              <Col>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src="/image/banner-1.jpg"
                      alt=""
                      style={{ borderRadius: '30px 30px 30px 30px' }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className='d-block w-100'
                      src="/image/banner-1.jpg"
                      alt=""
                      style={{ borderRadius: '30px 30px 30px 30px' }}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
            <Row className='text-center mt-4 px-4'>
              <div className="d-flex justify-content-between">
                <div className='d-flex flex-column gap-4'>
                  <Link href="/retail/admin/product" className='mt-0 mb-0'>
                    <div className="p-4 rounded-circle border border-danger" style={{ backgroundColor: '#FCEFF2' }}>
                      <Image
                        src="/icon-product.png"
                        alt=""
                        width={50}
                        height={50}
                        className='d-block'
                      />
                    </div>
                  </Link>
                  <p className='text-danger fw-semibold fs-5'>Product</p>
                </div>
                <div className='d-flex flex-column gap-4'>
                  <Link href="/retail/admin/product" className='mt-0 mb-0'>
                    <div className="p-4 rounded-circle border border-danger" style={{ backgroundColor: '#FCEFF2' }}>
                      <Image
                        src="/icon-wholesales.png"
                        alt=""
                        width={50}
                        height={50}
                        className='d-block'
                      />
                    </div>
                  </Link>
                  <p className='text-danger fw-semibold fs-5'>Wholesales</p>
                </div>
                <div className='d-flex flex-column gap-4'>
                  <Link href="/retail/admin/product" className='mt-0 mb-0'>
                    <div className="p-4 rounded-circle border border-danger" style={{ backgroundColor: '#FCEFF2' }}>
                      <Image
                        src="/icon-merchant.png"
                        alt=""
                        width={50}
                        height={50}
                        className='d-block'
                      />
                    </div>
                  </Link>
                  <p className='text-danger fw-semibold fs-5 list-unstyled'>Merchant</p>
                </div>
                <div className='d-flex flex-column gap-4'>
                  <Link href="/retail/admin/product" className='mt-0 mb-0'>
                    <div className="p-4 rounded-circle border border-danger" style={{ backgroundColor: '#FCEFF2' }}>
                      <Image
                        src="/icon-salestransaction.png"
                        alt=""
                        width={50}
                        height={50}
                        className='d-block'
                      />
                    </div>
                  </Link>
                  <p className='text-danger fw-semibold fs-5'>Transaction</p>
                </div>
              </div>
            </Row>
          </Container>
          <Container className='mt-10' fluid="md">
            <div className="d-flex px-4 gap-2">
              <div className='d-flex flex-column gap-4 mr-auto'>
                <p className='text-dark fw-normal fs-5'>Request!</p>
              </div>
            </div>
          </Container>
          <Container className='mt-10' fluid="md">
            <div className="d-flex px-4 gap-2">
              <div className='d-flex flex-column'>
                <div className='p-2 border border-dark d-flex flex-column rounded' style={{ minWidth: '180px', backgroundColor: 'white' }}>
                  <p className='text-dark mb-1 fw-normal'>Total Request</p>
                  <p className='text-danger  fs-5 mb-0 fw-semibold' style={{ textAlign: 'right' }}>46</p>
                </div>
              </div>
              <div className='d-flex flex-column'>
                <div className='p-2 border border-success d-flex flex-column rounded' style={{ minWidth: '180px', backgroundColor: '#E7F5E8' }}>
                  <p className='text-dark mb-1 fw-normal'>Complete!</p>
                  <p className='text-danger fs-5 mb-0 fw-semibold' style={{ textAlign: 'right' }}>41</p>
                </div>
              </div>
              <div className='d-flex flex-column'>
                <div className='p-2 border border-warning d-flex flex-column rounded' style={{ minWidth: '180px', backgroundColor: '#FFF1DB' }}>
                  <p className='text-dark mb-1 fw-normal'>In Progress</p>
                  <p className='text-danger  fs-5 mb-0 fw-semibold' style={{ textAlign: 'right' }}>4</p>
                </div>
              </div>
              <div className='d-flex flex-column'>
                <div className='p-2 border border-danger d-flex flex-column rounded' style={{ minWidth: '180px', backgroundColor: '#FFE7E1' }}>
                  <p className='text-dark mb-1 fw-normal'>Urgent!</p>
                  <p className='text-danger fs-5 mb-0 fw-semibold' style={{ textAlign: 'right' }}>1</p>
                </div>
              </div>
            </div>
          </Container>
          <Container className='mt-10' fluid="md">
            <div className="d-flex flex-column gap-2">
              <div className='rounded  py-2 px-4'>
                <Image
                  src="/bar.png"
                  alt=""
                  width={900}
                  height={300}
                  className='d-block'
                />
              </div>
            </div>
          </Container>
        </div >
      </LayoutAdmin >
    </>
  )
}

export default Sales