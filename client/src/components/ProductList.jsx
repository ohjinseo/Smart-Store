import {CollectionsBookmarkOutlined, CompareSharp, Flag} from '@material-ui/icons';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import styled from "styled-components";
import {baseURL} from '../utils/baseURL';
import ProductBox from './ProductBox';

const Container = styled.div `
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
`;

const ProductList = ({filter, kind}) => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const location = useLocation();
    const category = location
        .search
        .split("=")[1];

    useEffect(() => {
        const getProducts = async () => {
            try {
                if (!kind && !category) {
                    const {data} = await axios.get(`${baseURL}/products/`);
                    setProducts(data);
                } else {
                    const {data} = kind
                        ? await axios.get(`${baseURL}/products?kind=${kind}`)
                        : await axios.get(`${baseURL}/products?category=${category}`);
                    setProducts(data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [category, kind])

    // setState => 비동기식이므로 변경된 직후 상태가 변경되는 것을 볼 수 없음 SIZE AND COLOR
    useEffect(() => {
        setFilterProducts(products);
        if (filter && products) {
            let copyFilter = products.slice();

            if (filter.sizes.length !== 0) {

                copyFilter = products
                    ?.filter(function (product) {
                        let flag = true;

                        filter
                            .sizes
                            .forEach((s) => {
                                if (!product.size.includes(s) || product.size.length === 0) {
                                    flag = false;
                                }
                            })
                        return flag;
                    });
            }
            if (filter.colors.length !== 0) {

                copyFilter = copyFilter.filter((product) => {
                    let flag = true;
                    filter
                        .colors
                        .forEach((c) => {
                            if (!product.color.includes(c.toLowerCase())) {
                                flag = false;
                            }
                        })
                    return flag;
                });
            }
            setFilterProducts(copyFilter);
        }
    }, [filter, products])

    // SORT
    useEffect(() => {

        if (filterProducts && filter) {
            switch (filter.sort) {
                case "latest":
                    setFilterProducts(pre => [...pre].sort((a, b) => a.createdAt - b.createdAt))
                    break

                case "oldest":
                    setFilterProducts(pre => [...pre].sort((a, b) => b.createdAt - a.createdAt))
                    break

                case "desc":
                    setFilterProducts(pre => [...pre].sort((a, b) => b.price - a.price))
                    break

                case "asc":
                    setFilterProducts(pre => [...pre].sort((a, b) => a.price - b.price))
                    break

                default:
                    return

            }
        }
    }, [filter])

    return (
        <Container>
            {
                filterProducts
                    ? filterProducts
                        ?.map((item) => (<ProductBox data={item} key={item._id}/>))
                        : products.map((item) => (<ProductBox data={item} key={item._id}/>))
            }
        </Container>
    )
}

export default ProductList
