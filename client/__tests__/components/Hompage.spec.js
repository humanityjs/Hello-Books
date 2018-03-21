import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from '../../components/HomePage';
import BookCard from '../../components/common/BookCard';

describe('Homepage', () => {
  const setUp = type  => {
    let wrapper;
    if (type === 'initial') {
      const fetchPopularBooks = jest.fn();
      const loadingPopularBooks = true;
      const popularBooks = [];
      wrapper = shallow(<HomePage
        fetchPopularBooks={fetchPopularBooks}
        loadingPopularBooks={loadingPopularBooks}
        popularBooks={popularBooks}
      />);
    } else {
      const fetchPopularBooks = jest.fn();
      const loadingPopularBooks = false;
      const popularBooks = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
      ];
      wrapper = shallow(<HomePage
        fetchPopularBooks={fetchPopularBooks}
        loadingPopularBooks={loadingPopularBooks}
        popularBooks={popularBooks}
      />);
    }
    return wrapper;
  }
  it('mounts', () => {
    const wrapper = setUp('initial');
    expect(wrapper.find('#homepage').exists()).toBeTruthy();
  })

  it('renders BookCards if there are books to render', () => {
    const wrapper = setUp('');
    expect(wrapper.find(BookCard).length).toEqual(4)
  })
})