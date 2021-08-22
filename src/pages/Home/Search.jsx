import React from 'react';
import { Input, Space } from 'antd';

function Search({onSearch}) {
    
      return (
        <div className="page without_padding">
          <div className="page__title input_with_vidios">
            <span className="text-36 mb_40">Поиск видео</span>
            <Space direction="vertical">
              <Input.Search
                placeholder="Что хотите посмотреть?"
                enterButton="Найти"
                size="large"
                onSearch={onSearch}
              />
            </Space>
          </div>
        </div>
      )
}

export default Search;
