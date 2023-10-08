import { Box, ClickAwayListener, IconButton, Popper } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { FiMessageCircle } from 'react-icons/fi';

import { isEmptyArray } from '@/lib/helper';

import { fetchConversationsForUser } from '@/database/conversation';

import ConversationItem from '@/components/chat/ConversationItem';
import Loader from '@/components/Loader';

import useAuthStore from '@/store/useAuthStore';

export default function MessagesPopover() {
  const { user } = useAuthStore();
  const [loading, setLoading] = React.useState(true);
  const [conversations, setConversations] = React.useState<any>([]);

  const [fetchError, setFetchError] = React.useState('');

  const [panelOpen, setPanelOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const toggleOpen = () => setPanelOpen(!panelOpen);
  const handleClose = (event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target) &&
      event.target !== anchorRef.current
    ) {
      return;
    }

    setPanelOpen(false);
  };

  // fetchConversationsForUser

  React.useEffect(() => {
    const loadConversations = async () => {
      setFetchError('');
      try {
        const _conversations = await fetchConversationsForUser(user?.$id);
        setConversations(_conversations);
      } catch (error) {
        setFetchError('Failed to load conversations');
      } finally {
        setLoading(false);
      }
    };
    loadConversations();
  }, [panelOpen]);

  return (
    <div className='relative'>
      <IconButton ref={anchorRef} onClick={toggleOpen}>
        <FiMessageCircle />
      </IconButton>

      <ClickAwayListener onClickAway={handleClose}>
        <Popper
          anchorEl={anchorRef.current}
          open={panelOpen}
          className='z-[402] rounded bg-white'
        >
          <Box
            boxShadow={3}
            className='flex h-[400px] w-[350px] flex-col overflow-hidden py-2'
          >
            <div className='text-text-secondary-default px-2 text-xl font-medium'>
              Messages
            </div>
            <div className='overflow-y-autod flex-1 pt-2'>
              <Scrollbars>
                {loading && <Loader />}
                <ul className='divide-y divide-gray-300'>
                  {!loading && !fetchError && isEmptyArray(conversations) && (
                    <div className='no-listings px-2'>
                      <p className='font-medium'>
                        Explore available listings to start a conversation.
                      </p>
                    </div>
                  )}

                  {fetchError && (
                    <p className='px-2 font-medium text-red-400'>
                      {fetchError}
                    </p>
                  )}

                  {loading && <Loader />}
                  {conversations.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className='hover:bg-slate-100'
                        onClick={() => setPanelOpen(false)}
                      >
                        <Link href={`/messages/${item.$id}`}>
                          <ConversationItem item={item} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Scrollbars>
            </div>
            <Link
              href='/messages'
              className='text-primary-main hover:text-primary-lightExtra px-2 text-center hover:underline'
            >
              See all
            </Link>
          </Box>
        </Popper>
      </ClickAwayListener>
    </div>
  );
}
