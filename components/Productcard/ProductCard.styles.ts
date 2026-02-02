import styled from "styled-components";

export const Card = styled.article`
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: box-shadow 160ms ease;
  &:hover {
    box-shadow: 0 6px 18px rgba(16, 24, 40, 0.08);
  }
`;

export const ImgWrap = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  background: #f9fafb;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Body = styled.div`
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const Description = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.muted};
  font-size: 0.95rem;
  line-height: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`;

export const Price = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
`;

export const Meta = styled.div`
  color: ${(props) => props.theme.colors.muted};
  font-size: 0.9rem;
`;

export const AddButton = styled.button`
  margin-top: auto;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background: ${(props) => props.theme.colors.primaryDark};
  }
`;
