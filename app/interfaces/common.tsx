interface Image {
    src: string,
    alt?: string | undefined,
    width?: number,
    height?: number,
    created_at?: string
}

interface pageInfo {
    hasNextPage?: boolean,
    endCursor?: string
    hasPreviousPage?: boolean,
    startCursor?: string,
    current_page?: number,
}
