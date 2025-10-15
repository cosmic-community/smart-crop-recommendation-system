import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for simple error checking
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all states
export async function getStates() {
  try {
    const response = await cosmic.objects
      .find({ type: 'states' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch states');
  }
}

// Fetch featured state (Telangana)
export async function getFeaturedState() {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'states',
        'metadata.featured': true
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects[0] || null;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch featured state');
  }
}

// Fetch all crops
export async function getCrops() {
  try {
    const response = await cosmic.objects
      .find({ type: 'crops' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch crops');
  }
}

// Fetch crop yield records
export async function getCropYieldRecords() {
  try {
    const response = await cosmic.objects
      .find({ type: 'crop-yield-records' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch crop yield records');
  }
}

// Fetch crop yield records by state
export async function getCropYieldRecordsByState(stateId: string) {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'crop-yield-records',
        'metadata.state': stateId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch crop yield records by state');
  }
}

// Fetch single crop by slug
export async function getCropBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ 
        type: 'crops',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object || null;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch crop');
  }
}