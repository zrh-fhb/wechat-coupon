import { getTaobaoCoupon } from './tb';
import { getJdCoupon } from './jd';

export async function getCouponByUrl(url) {
  if (url.includes('taobao.com') || url.includes('tmall.com')) {
    return await getTaobaoCoupon(url);
  }
  if (url.includes('jd.com')) {
    return await getJdCoupon(url);
  }
  return '请发送淘宝或京东商品链接哦～';
}