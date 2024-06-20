# IsayArt

IsayArt is an online, mobile-only, gallery where users can upload and showcase their artworks. The website consists of three main sections: Gallery, Create Artwork, and Artwork Details.

## Features

### Gallery Section

- Displays all artworks with the following details: title, author, date, and location.
- Each artwork has a delete button to remove it from the gallery.
- Each artwork has a heart button to toggle its favorite status.

### Create Artwork Section

- Users can create new artworks by filling out a form with the following required fields: title, width and height (in cm), location, year of creation, URL to an image of the artwork, a brief description, and the technique used (e.g., oil on canvas).
- The author field is optional and defaults to "unknown" if not provided.

### Artwork Details Section

- When clicking on an artwork's image or title in the gallery, the detailed view of the artwork is displayed.
- This view shows all the artwork's details but does not include the delete or favorite buttons.

### Empty Gallery View

- If no artworks are available, a message "No artworks in the gallery" is displayed along with an image.

### 404 Not Found Page

- If a user navigates to a non-existent path, a "Page Not Found" message is displayed.

## Technologies Used

- Vite
- React
- TypeScript
- Toastify
- SASS
- Redux Toolkit
- Sonar

# Data

## Data layer types

- ui

  - isLoading: boolean

- artworks
  - artworks: array of Artworks

## Data modifications

- ui

  - showLoading: Sets `isLoading` to `true`.
  - hideLoading: Sets `isLoading` to `false`.

- artworks
  - loadArtworks: Loads an array of artworks into the state.
  - updateArtworks: Updates an existing artwork in the state by matching its `_id` and replacing it with the new data.

## Description

### Data layer

**ui**

- `isLoading`: Indicates whether a loading indicator should be displayed.

**artworks**

- `artworks`: A list of artwork objects, each containing the following details:
  - `title`: Title of the artwork.
  - `author`: Author of the artwork. Defaults to "unknown" if not provided.
  - `year`: Year when the artwork was created.
  - `location`: Location where the artwork is located.
  - `width`: Width of the artwork in centimeters.
  - `height`: Height of the artwork in centimeters.
  - `url`: URL to an image of the artwork.
  - `description`: Brief description of the artwork.
  - `technique`: Technique used (e.g., oil on canvas).
  - `favorite`: Indicates whether the artwork is marked as a favorite.
  - `_id`: Unique identifier of the artwork.

# Environment Variables

- In order for the web to work it is neccessary an .env file in the server directory with the following variables:

```
VITE_API_URL=<yourApiRestUrl>
```

# API Client

The `ArtworksClient` is responsible for interacting with the REST API to manage artworks. Here's an explanation of how different operations are performed:

## Client Operations

### Fetching the List of Artworks

To fetch the list of all artworks, the client makes a `GET` request to the API URL configured in the environment variable `VITE_API_URL` with the path `/artworks`. The response to this request is an object containing a list of artworks.

- **Method**: `getAll`
- **Endpoint**: `GET ${import.meta.env.VITE_API_URL}/artworks`
- **Response**:

```json
{
  "artworks": [
    {
      "_id": "666ec88286d2d52b0613eba8",
      "title": "Guernica",
      "author": "Pablo Picasso",
      "description": "Obra que simboliza el bombardeo a Guernica",
      "year": 1937,
      "artworkUrl": "https://raw.githubusercontent.com/sayloryna/isayfotos/main/imagenes-pequea%C3%B1s/guernika.webp",
      "size": {
        "width": 349,
        "height": 776
      },
      "isFavourite": false,
      "location": "Madrid, España"
    }
  ]
}
```

### Fetching a Single Artwork by ID

To fetch a single artwork by its ID, the client makes a `GET` request to the endpoint `/artworks/{artworkId}`. The response contains the details of the requested artwork.

- **Method**: `getArtworkById`
- **Endpoint**: `GET ${import.meta.env.VITE_API_URL}/artworks/{artworkId}`
- **Response**:

```json
{
  "artwork": {
    "_id": "666ec88286d2d52b0613eba8",
    "title": "Guernica",
    "author": "Pablo Picasso",
    "description": "Obra que simboliza el bombardeo a Guernica",
    "year": 1937,
    "artworkUrl": "https://raw.githubusercontent.com/sayloryna/isayfotos/main/imagenes-pequea%C3%B1s/guernika.webp",
    "size": {
      "width": 349,
      "height": 776
    },
    "isFavourite": false,
    "location": "Madrid, España"
  }
}
```

### Deleting an Artwork by ID

To delete an artwork by its ID, the client makes a `DELETE` request to the endpoint `/artworks/{artworkId}`. The response contains the details of the deleted artwork.

- **Method**: `deleteArtworkById`
- **Endpoint**: `DELETE ${import.meta.env.VITE_API_URL}/artworks/{artworkId}`
- **Response**:

```json
{
  "deletedArtwork": {
    "_id": "666ec88286d2d52b0613eba8",
    "title": "Guernica",
    "author": "Pablo Picasso",
    "description": "Obra que simboliza el bombardeo a Guernica",
    "year": 1937,
    "artworkUrl": "https://raw.githubusercontent.com/sayloryna/isayfotos/main/imagenes-pequea%C3%B1s/guernika.webp",
    "size": {
      "width": 349,
      "height": 776
    },
    "isFavourite": false,
    "location": "Madrid, España"
  }
}
```

### Creating a New Artwork

To create a new artwork, the client makes a `POST` request to the endpoint `/artworks` with the artwork data in the request body. The response contains the details of the newly created artwork.

- **Method**: `createArtwork`
- **Endpoint**: `POST ${import.meta.env.VITE_API_URL}/artworks`
- **Request Body**:

```json
{
  "title": "Guernica",
  "author": "Pablo Picasso",
  "description": "Obra que simboliza el bombardeo a Guernica",
  "year": 1937,
  "artworkUrl": "https://raw.githubusercontent.com/sayloryna/isayfotos/main/imagenes-pequea%C3%B1s/guernika.webp",
  "size": {
    "width": 349,
    "height": 776
  },
  "location": "Madrid, España"
}
```

- **Response**:

```json
{
  "createdArtwork": {
    "_id": "666ec88286d2d52b0613eba8",
    "title": "Guernica",
    "author": "Pablo Picasso",
    "description": "Obra que simboliza el bombardeo a Guernica",
    "year": 1937,
    "artworkUrl": "https://raw.githubusercontent.com/sayloryna/isayfotos/main/imagenes-pequea%C3%B1s/guernika.webp",
    "size": {
      "width": 349,
      "height": 776
    },
    "isFavourite": false,
    "location": "Madrid, España"
  }
}
```

### Updating an Existing Artwork

To update an existing artwork, the client makes a `PATCH` request to the endpoint `/artworks` with the updated artwork data in the request body. The response contains the details of the updated artwork.

- **Method**: `updateArtwork`
- **Endpoint**: `PATCH ${import.meta.env.VITE_API_URL}/artworks`
- **Request Body**:

```json
{
  "_id": "666ec88286d2d52b0613eba8",
  "update": {
    "isFavourite": true,
    "title": "Bombardeos de Guernica"
  }
}
```

- **Response**:

```json
{
  "updatedArtwork": {
    "_id": "666ec88286d2d52b0613eba8",
    "title": "Bombardeos de Guernica",
    "author": "Pablo Picasso",
    "description": "Obra que simboliza el bombardeo a Guernica",
    "year": 1937,
    "artworkUrl": "https://raw.githubusercontent.com/sayloryna/isayfotos/main/imagenes-pequea%C3%B1s/guernika.webp",
    "size": {
      "width": 349,
      "height": 776
    },
    "isFavourite": true,
    "location": "Madrid, España"
  }
}
```

## Error Handling

In case of errors during the API REST requests, the client throws appropriate error messages. Common error scenarios include:

- **Failed to fetch**: Indicates a network or connectivity issue.
- **Non-OK response status**: Indicates a server-side error, with the specific HTTP status code included in the error message.
- **Duplicate artwork**: Specific to the `createArtwork` method, indicating that an artwork with the same title already exists.
