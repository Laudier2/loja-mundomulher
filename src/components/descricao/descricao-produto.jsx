import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../redux/cart/cart';
import { Button, Button2, ConatinerDesc, Container, ContainerDiv, ContainerImage, ContainerImageTop } from "./styles";
import imgDesc from "../../img/desc_img.jpg"
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { BsFillCircleFill } from 'react-icons/bs';

const Descricao = () => {

  const [img1, setImage1] = useState(``)
  const [img2, setImage2] = useState('')
  const [img3, setImage3] = useState('')
  const [img4, setImage4] = useState('')
  const [img5, setImage5] = useState('')
  const [price, setReceb2] = useState('')
  const [receb_data_name, setReceb3] = useState('')
  const [desc, setReceb4] = useState('')

  useEffect(() => {
    const req = localStorage.getItem("img0")
    setImage1(req)
  }, [])

  useEffect(() => {
    const req = localStorage.getItem("img1")
    setImage2(req)
  }, [])

  useEffect(() => {
    const req = localStorage.getItem("img2")
    setImage3(req)
  }, [])

  useEffect(() => {
    const req = localStorage.getItem("img3")
    setImage4(req)
  }, [])

  useEffect(() => {
    const req = localStorage.getItem("img4")
    setImage5(req)
  }, [])

  useEffect(() => {
    const req1 = localStorage.getItem("price")
    setReceb2(req1)
  }, [])

  useEffect(() => {
    const req2 = localStorage.getItem("name")
    setReceb3(req2)
  }, [])

  useEffect(() => {
    const req3 = localStorage.getItem("descricao")
    setReceb4(req3)
  }, [])

  const dispatch = useDispatch()

  function handlerCartAdd(e) {
    dispatch(addCart(e))
  }

  const trocarimagem = (e) => {
    if (e == img1) {
      setImagem(state => state = img1);
      if (img1 == null) {
        setImagem(state => state = imgDesc);
      }
      if (img1 == null) {
        setImagem(state => state = imgDesc);
      }
    }
    if (e == img2) {
      setImagem(state => state = img2);
      if (img2 == null) {
        setImagem(state => state = imgDesc);
      }
      if (img2 == null) {
        setImagem(state => state = imgDesc);
      }
    }
    if (e == img3) {
      setImagem(state => state = img3);
      if (img3 == null) {
        setImagem(state => state = imgDesc);
      }
    }
    if (e == img4) {
      setImagem(state => state = img4);
      if (img4 == null) {
        setImagem(state => state = imgDesc);
      }
    }
    if (e == img5) {
      setImagem(state => state = img5);
      if (img5 == null) {
        setImagem(state => state = imgDesc);
      }
    }
  }
  const [imagem, setImagem] = useState('');

  const cores0 = localStorage.getItem("color0")
  const cores1 = localStorage.getItem("color1")
  const cores2 = localStorage.getItem("color2")

  return (
    <Container>
      <ReactLoading />
      <ContainerImage src={img1 == null || undefined || "" ? imgDesc : img1} onClick={() => trocarimagem(img1)} />
      <ContainerImage src={img2 == null || undefined || "" ? imgDesc : img2} onClick={() => trocarimagem(img2)} />
      <ContainerImage src={img3 == null || undefined || "" ? imgDesc : img3} onClick={() => trocarimagem(img3)} />
      <ContainerImage src={img4 == null || undefined || "" ? imgDesc : img4} onClick={() => trocarimagem(img4)} />
      <ContainerImage src={img5 == null || undefined || "" ? imgDesc : img5} onClick={() => trocarimagem(img5)} />
      <ContainerImageTop src={imagem === '' ? img1 : imagem} />
      <ConatinerDesc>
        <div>
          <div>
            <h5><strong>{receb_data_name}</strong></h5>
            <div>
              <b>4.8</b>
              <StarOutlineIcon />
              <StarOutlineIcon />
              <StarOutlineIcon />
              <StarOutlineIcon />
              <StarOutlineIcon />
              (6505)
            </div>
            <p className="h2 mt-2"><strong>R$ {price}</strong></p>
            <span><strong>em 12x R$7,²³</strong></span>
            <br />
            <a href="/desc"><span>ver os meio de pagamento</span></a>
            <br /><br />
            <h5>Cor: <strong>Dispanivel</strong></h5>
            <ContainerDiv>
              <BsFillCircleFill style={{ color: 'black' }} />
              {/*cores0 == 'undefined' ? "" : cores0*/}
              <BsFillCircleFill style={{ color: 'white' }} />
              <BsFillCircleFill style={{ color: 'red' }} />
            </ContainerDiv>
          </div>
        </div>
        <div>
          <p>
            <strong>Envio para todo o país</strong>
            <br />
            <span>Saiba os prazos de entrega e as formas de envio.</span>
          </p>
          <div>
            <LocationOnIcon className='text-info' />
            <a href="/desc">Calcular prazo de entrega</a>
          </div>
          <div>
            <p><strong>Estoque disponível</strong> (1000) <br />
              <span>Esse produto esta disponivel evio rapido</span>
            </p>
          </div>
          <Link to="/desc" style={{ textDecoration: 'none' }}>
            <Button2 backgroundColor="rgb(36, 171, 201)">Comprar agora</Button2>
          </Link>
          <Button2 backgroundColor="rgb(75, 117, 126)" onClick={() => handlerCartAdd()}>
            Adicionar ao carrinho
          </Button2>

          <br />
          <div>
            <p><SwapHorizIcon className='text-info' /> <strong className='text-primary'>Devolução Gratis</strong> <br />
              <span>Você tem 7 dias a partir da data de recebimento.</span>
            </p>
          </div>
          <br />
          <div>
            <p><VerifiedUserIcon className='text-info' /> <strong className='text-primary'>Compra Garantida</strong> <br />
              <span>eceba o produto que está esperando ou devolvemos o dinheiro.</span>
            </p>
          </div>
        </div>

      </ConatinerDesc >
    </Container >
  );
}

export default Descricao;

