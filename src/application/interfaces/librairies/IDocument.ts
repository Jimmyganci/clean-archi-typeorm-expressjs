export interface IDocument {
    index: string;
    
    body: {
        size: number;
        query: {
            bool: {
                must : {
                    is_repeat : string;
                }
            }
        }
    }
    
}