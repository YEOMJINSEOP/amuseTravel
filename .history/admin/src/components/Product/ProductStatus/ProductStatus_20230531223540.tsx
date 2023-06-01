import { useEffect, useState } from 'react';
import axiosInstance from '../../../services/axiosInstance';

function ProductStatus() {
  const [activeItemList, setActiveItemList] = useState([]);
  axiosInstance.get('/main/current-item')
  .then((res) => setActiveItemList(res.data.data.items));

  useEffect(() => {
    console.log(activeItemList);
  }, [activeItemList]);
  return (
    <div>
      <div>
        <p>활성화 상품</p>
        {activeItemList.map((item) => (
          <li>
            {/* {item.} */}
          </li>
        ))}
      </div>

      <div>
        <p>비활성화 상품</p>
      </div>
    </div>
  );
}

export default ProductStatus;