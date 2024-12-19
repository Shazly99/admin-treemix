import React, { useEffect, useState } from "react";
import { Table, Spin, Button, Modal, Form, Input, message, Space } from "antd";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/pages`);
      setData(data);
    } catch {
      message.error(t("Error fetching data"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);
      const queryParams = new URLSearchParams(values).toString();
      await axios.post(`${import.meta.env.VITE_BASE_URL}/pages?${queryParams}`);
      message.success(t("Page added successfully"));
      setOpen(false);
      form.resetFields();
      fetchData();
    } catch {
      message.error(t("Failed to add page"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Button type="primary" onClick={() => setOpen(true)}>
        {t("actions.add_page")}
      </Button>

      <Table
        columns={[
          { title: t("table.id"), dataIndex: "id", key: "id" },
          { title: t("table.label"), dataIndex: "label", key: "label" },
          { title: t("table.page_key"), dataIndex: "page_key", key: "page_key" },
        ]}
        dataSource={data}
        bordered
        rowKey="id"
      />

      <Modal
        title={t("modals.add_page_title")}
        open={open}
        onOk={handleSubmit}
        onCancel={() => setOpen(false)}
        confirmLoading={loading}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="page_key"
            label={t("table.page_key")}
            rules={[{ required: true, message: t("form.please_enter_page_key") }]}
          >
            <Input placeholder={t("form.enter_page_key")} />
          </Form.Item>
          <Form.Item
            name="label"
            label={t("table.label")}
            rules={[{ required: true, message: t("form.please_enter_label") }]}
          >
            <Input placeholder={t("form.enter_label")} />
          </Form.Item>
        </Form>
      </Modal>

    </Spin>
  );
};

export default Settings;
