import { Col, Form, Input, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const DynamicForm = ({ formik, type, mode, desc, type2, blog }) => {
    let { t } = useTranslation();
    return (
        <Row gutter={50}>
            {
                type == 'about' && <>
                    <Col xl={12} lg={12} xxl={12} md={12} sm={24} xs={24}>
                        <Form.Item name={mode === 'add' ? "title_en" : undefined}
                            label={t('title_en_label')} rules={[{ required: true, message: t('title_en_error') }]}>
                            <Input
                                name="title_en"
                                value={formik.values.title_en}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={12} lg={12} xxl={12} md={12} sm={24} xs={24}>
                        <Form.Item label={t('title_ar_label')}
                            name={mode === 'add' ? "title_ar" : undefined}
                            rules={[{ required: true, message: t('title_ar_error') }]}
                        >
                            <Input
                                name="title_ar"
                                value={formik.values.title_ar}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Item>
                    </Col>
                </>
            }
            {
                type2 == 'project' && <>
                    <Col xl={12} lg={12} xxl={12} md={12} sm={24} xs={24}>
                        <Form.Item name={mode === 'add' ? "period_ar" : undefined}
                            label={t('period_label_ar')} rules={[{ required: true, message: t('period_error') }]}>
                            <Input
                                name="period_ar"
                                value={formik.values.period_ar}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                            />
                        </Form.Item>
                    </Col>
                    <Col xl={12} lg={12} xxl={12} md={12} sm={24} xs={24}>
                        <Form.Item name={mode === 'add' ? "period_en" : undefined}
                            label={t('period_label_en')} rules={[{ required: true, message: t('period_error') }]}>
                            <Input
                                name="period_en"
                                value={formik.values.period_en}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                            />
                        </Form.Item>
                    </Col>
                    <Col xl={12} lg={12} xxl={12} md={12} sm={24} xs={24}>
                        <Form.Item label={t('year_label')}
                            name={mode === 'add' ? "year" : undefined}
                            rules={[{ required: true, message: t('year_error') }]}
                        >
                            <Input
                                name="year"
                                value={formik.values.year}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={12} lg={12} xxl={12} md={12} sm={24} xs={24}>
                        <Form.Item label={t('category_name_ar')}
                            name={mode === 'add' ? "category_name_ar" : undefined}
                            rules={[{ required: true, message: t('year_error') }]}
                        >
                            <Input
                                name="category_name_ar"
                                value={formik.values.category_name_ar}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={12} lg={12} xxl={12} md={12} sm={24} xs={24}>
                        <Form.Item label={t('category_name_en')}
                            name={mode === 'add' ? "category_name_en" : undefined}
                            rules={[{ required: true, message: t('year_error') }]}
                        >
                            <Input
                                name="category_name_en"
                                value={formik.values.category_name_en}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Item>
                    </Col>
                </>
            }
            {
                type == 'categories' && <>
                    <Col xl={12} lg={12} xxl={12} md={12} sm={24} xs={24}>
                        <Form.Item label={t('name_en_label')} name={mode === 'add' ? "name_en" : undefined}
                            rules={[{ required: true, message: t('name_en_error') }]}>
                            <Input
                                name="name_en"
                                value={formik.values.name_en}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                            />
                        </Form.Item>
                    </Col>
                    <Col xl={12} lg={12} xxl={12} md={12} sm={24} xs={24}>
                        <Form.Item label={t('name_ar_label')} name={mode === 'add' ? "name_ar" : undefined}
                            rules={[{ required: true, message: t('name_ar_error') }]}>
                            <Input
                                name="name_ar"
                                value={formik.values.name_ar}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Item>
                    </Col>

                </>
            }
            {
                desc === 'desc' && <>
                    <Col xl={24} lg={24} xxl={24} md={24} sm={24} xs={24}></Col>
                    <Col xl={24} lg={24} xxl={24} md={24} sm={24} xs={24}>
                        <Form.Item label={t('description_en_label')} name={mode === 'add' ? "description_en" : undefined}
                            rules={[{ required: true, message: t('description_en_error') }]} >
                            <ReactQuill
                                value={formik.values.description_en}
                                onChange={(value) => formik.setFieldValue('description_en', value)}
                                onBlur={() => formik.setFieldTouched('description_en', true)}
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={24} lg={24} xxl={24} md={12} sm={24} xs={24}>
                        <Form.Item label={t('description_ar_label')} name={mode === 'add' ? "description_ar" : undefined}
                            rules={[{ required: true, message: t('description_ar_error') }]}>
                            <ReactQuill
                                value={formik.values.description_ar}
                                onChange={(value) => formik.setFieldValue('description_ar', value)}
                                onBlur={() => formik.setFieldTouched('description_ar', true)}
                            />
                        </Form.Item>
                    </Col>

                </>
            }
            {
                desc === 'blog' && <>
                    <Col xl={24} lg={24} xxl={24} md={24} sm={24} xs={24}></Col>
                    <Col xl={24} lg={24} xxl={24} md={24} sm={24} xs={24}>
                        <Form.Item label={t('description_en_label')} name={mode === 'add' ? "description_en" : undefined}
                            rules={[{ required: true, message: t('description_en_error') }]} >
                            <ReactQuill
                                value={formik.values.description_en}
                                onChange={(value) => formik.setFieldValue('description_en', value)}
                                onBlur={() => formik.setFieldTouched('description_en', true)}
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={24} lg={24} xxl={24} md={12} sm={24} xs={24}>
                        <Form.Item label={t('description_ar_label')} name={mode === 'add' ? "description_ar" : undefined}
                            rules={[{ required: true, message: t('description_ar_error') }]}>
                            <ReactQuill
                                value={formik.values.description_ar}
                                onChange={(value) => formik.setFieldValue('description_ar', value)}
                                onBlur={() => formik.setFieldTouched('description_ar', true)}
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={24} lg={24} xxl={24} md={24} sm={24} xs={24}>
                        <Form.Item label={t('short_description_en_label')} name={mode === 'add' ? "short_description_en" : undefined}
                            rules={[{ required: true, message: t('short_description_en_error') }]} >
                        
                            <Input.TextArea
                                name="short_description_en"
                                value={formik.values.short_description_en}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                            />
                        </Form.Item>
                    </Col>
                    <Col xl={24} lg={24} xxl={24} md={12} sm={24} xs={24}>
                        <Form.Item label={t('short_description_ar_label')} name={mode === 'add' ? "short_description_ar" : undefined}
                            rules={[{ required: true, message: t('short_description_ar_error') }]}>
                        
                               <Input.TextArea
                                name="short_description_ar"
                                value={formik.values.short_description_ar}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                            />
                        </Form.Item>
                    </Col>
                </>
            }
        </Row>
    )
}

export default DynamicForm