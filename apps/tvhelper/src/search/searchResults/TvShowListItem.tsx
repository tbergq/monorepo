import { graphql, useFragment } from 'react-relay';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import type { TvShowListItem_data$key as TvShow } from '__generated__/TvShowListItem_data.graphql';

const borderRadius = 4;

const StyledLink = styled.a({
  'outline': 'none',
  ':focus, :hover': {
    transform: ' scale(1.05)',
    transition: 'all 0.2s ease-in',
  },
});

const Container = styled.div`
  height: 100%;
  margin-bottom: 8px;
  background-color: #cccccc;
  border-radius: ${borderRadius}px;
  position: relative;
  background-size: cover;
`;

const BottomSheet = styled.div({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#000000',
  opacity: 0.7,
  minHeight: '50px',
  borderBottomLeftRadius: `${borderRadius}px`,
  borderBottomRightRadius: `${borderRadius}px`,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

const StyledText = styled.div({
  paddingTop: '5px',
  color: '#ffffff',
  fontSize: '16px',
});

const StyledImage = styled(Image)({
  objectFit: 'cover',
  borderRadius,
});

type Props = {
  data: TvShow | null;
  width?: number;
};

function TvShowListItem(props: Props) {
  const data = useFragment(
    graphql`
      fragment TvShowListItem_data on TvShow {
        id
        name
        status
        rating
        image {
          medium
        }
      }
    `,
    props.data,
  );

  const status = data?.status ?? '';
  const name = data?.name ?? '';
  const rating = data?.rating ?? '';
  const tvShowId = data?.id;
  const src = data?.image?.medium;

  if (tvShowId == null) {
    return null;
  }
  return (
    <Link href={`/tvShow?id=${tvShowId}`}>
      <StyledLink href={`/tvShow?id=${tvShowId}`}>
        <Container>
          {/* @ts-ignore: layout does exist */}
          {src != null && <StyledImage alt={name} layout="fill" src={data?.image?.medium} />}
          <BottomSheet>
            <StyledText>{`${name} - ${rating}`}</StyledText>
            <StyledText>{status}</StyledText>
          </BottomSheet>
        </Container>
      </StyledLink>
    </Link>
  );
}

export default TvShowListItem;
