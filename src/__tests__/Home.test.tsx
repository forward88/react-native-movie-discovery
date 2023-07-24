import {act, cleanup} from '@testing-library/react-native';
import * as React from 'react';
import axios from 'axios';
import {renderWithProviders} from '../../test-utils';
import {HomeScreen} from '../screens/Home/Home';
import {mockedResult} from '../../__mocks__/mock';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Movie Discovery Home Page', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  afterEach(cleanup);

  it('should render HomeScreen component correctly', async () => {
    const container = renderWithProviders(<HomeScreen />);
    await act(() => {
      expect(container).not.toBeNull();
    });
  });

  it('should render FlatList component correctly if movie data is available', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          results: mockedResult,
          total_pages: 2000,
        },
      }),
    );
    const {getByTestId} = renderWithProviders(<HomeScreen />);
    await act(() => {
      expect(getByTestId('movies-flatlist')).not.toBeNull();
    });
  });

  it('should show 20 movie items if movie data is available', async () => {
    const movieState = {
      movies: mockedResult,
      fetchError: '',
      isLoading: false,
      totalPage: 20,
    };
    const {getAllByTestId} = renderWithProviders(<HomeScreen />, {
      preloadedState: {
        movie: movieState,
      },
    });
    await act(() => {
      expect(getAllByTestId('movie-item')).toHaveLength(20);
    });
  });
});
