import { getCouponByUrl } from '../utils/router';

export default async function handler(req, res) {
  const xml = req.body?.xml;

  if (xml?.MsgType?.[0] === 'text') {
    const content = xml.Content[0];
    const reply = await getCouponByUrl(content);
    const response = `
      <xml>
        <ToUserName><![CDATA[${xml.FromUserName[0]}]]></ToUserName>
        <FromUserName><![CDATA[${xml.ToUserName[0]}]]></FromUserName>
        <CreateTime>${Date.now()}</CreateTime>
        <MsgType><![CDATA[text]]></MsgType>
        <Content><![CDATA[${reply}]]></Content>
      </xml>`;
    res.setHeader('Content-Type', 'text/xml');
    res.send(response);
  } else {
    res.send('success');
  }
}